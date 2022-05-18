import React, { useState, useEffect, useCallback, useMemo } from 'react';

import AppRoutes from './routes';

import NavBar from './components/NavBar';
import Header from './components/Header';
import RenderIf from './components/RenderIf';
import ShadowEffect from './components/ShadowEffect';

import AppContext from './AppContext';

import loadAllMenu from './utils/fetchAllMenuData';
import calcSum from './utils/calculateAccount';
import mustRenderHeader from './utils/mustRenderHeader';
import removeDuplicateItems from './utils/removeDuplicateItems';

import './App.css';

export default function App() {
	const [ actuallyPage, setActuallyPage ] = useState('home');
	const [ allMenu, setAllMenu ] = useState([]);
	const [ allOrders, setAllOrders ] = useState([]);
	const [ baseUrl ] = useState('https://foodbukka.herokuapp.com/api/v1/menu');
	const [ ordersCounter, setOrdersCounter ] = useState(0);
	const [ accountValue, setAccountValue ] = useState(0);
	const [ isClosedAccount, setIsClosedAccount ] = useState(false);

	const funcSetActuallyPage = useCallback((page) => {
		setActuallyPage(page);
		if (page === 'order') {
			setOrdersCounter(0);
		}
	}, []);

	const updateOneMenuItem = useCallback((item, itemIndex, copyOfAllMenu) => {
		item.hasAlreadyBeenOrdered = !item.hasAlreadyBeenOrdered;

		copyOfAllMenu[itemIndex] = item;
		setAllMenu(copyOfAllMenu);
	}, []);

	const addNewOrder = useCallback((item, copyOfAllOrders) => {
		const copyOfOrders = [ ...copyOfAllOrders ];
		const order = { ...item };

		order.hasAlreadyBeenOrdered = false;
		copyOfOrders.push(order);

		setAllOrders(copyOfOrders);
		setOrdersCounter((lastState) => lastState + 1);
	}, []);

	const removeOneOrder = useCallback((itemIndexInOrders, copyOfAllOrders) => {
		const copyOfOrders = [ ...copyOfAllOrders ];
		copyOfOrders.splice(itemIndexInOrders, 1);

		setAllOrders(copyOfOrders);
	}, []);

	const addOrder = useCallback((e, menuItemId, copyOfAllMenu, copyOfAllOrders) => {
		const itemIndex = copyOfAllMenu.findIndex((item) => item['_id'] === menuItemId);
		const item = copyOfAllMenu.find((item) => item['_id'] === menuItemId);

		addNewOrder(item, copyOfAllOrders);
		updateOneMenuItem(item, itemIndex, copyOfAllMenu);
	}, []);

	const removeOrder = useCallback((e, menuItemId, copyOfAllMenu, copyOfAllOrders) => {
		const itemIndexInMenu = copyOfAllMenu.findIndex((item) => item['_id'] === menuItemId);
		const itemIndexInOrders = copyOfAllOrders.findIndex((item) => item['_id'] === menuItemId);

		const item = copyOfAllMenu.find((item) => item['_id'] === menuItemId);

		removeOneOrder(itemIndexInOrders, copyOfAllOrders);
		updateOneMenuItem(item, itemIndexInMenu, copyOfAllMenu);
	}, []);

	const loadMenuAndPrice = useCallback(async () => {
		const menuAndPrice = removeDuplicateItems(await loadAllMenu(baseUrl));
		setAllMenu(menuAndPrice);
	}, []);

	const setTheAmount = useCallback((action, _id) => {
		const copyOfMenu = [...allMenu];
		const copyOfOrders = [...allOrders];

		const indexMenu = allMenu.findIndex((obj) => obj['_id'] === _id);
		const indexOrder = allOrders?.findIndex((obj) => obj['_id'] === _id);

		const theAmountMenu = copyOfMenu[indexMenu].theAmount;

		if (theAmountMenu <= 1 && action === 'remove') return;
		if (action === 'add') {
			copyOfMenu[indexMenu].theAmount += 1;
			if (indexOrder > -1) copyOfOrders[indexOrder].theAmount += 1;
		}
		if (action === 'remove') {
			copyOfMenu[indexMenu].theAmount -= 1;
			if (indexOrder > -1) copyOfOrders[indexOrder].theAmount -= 1;
		}

		setAllMenu(copyOfMenu);
		setAllOrders(copyOfOrders);
	}, [allMenu, allOrders]);

	const toCloseAccount = (e) => {
		const copyOfOrders = [...allOrders];
		const copyOfMenu = [...allMenu];

		if (!copyOfOrders.length) {
			e.preventDefault();
			alert('Você não adicionou nenhum pedido');
			return;
		}

		const closedOrders = copyOfOrders.map((order) => ({
			...order, hasAlreadyBeenOrdered: true
		}));

		const closedMenu = copyOfMenu.map((menuItem) => ({
			...menuItem, hasAlreadyBeenOrdered: true
		}));

		setIsClosedAccount(true);
		setAllOrders(closedOrders);
		setAllMenu(closedMenu);
		setActuallyPage('account');
	};

	const toOpenMenuAndOrders = () => {
		const copyOfOrders = [...allOrders];
		const copyOfMenu = [...allMenu];

		const openedOrders = copyOfOrders.map((order) => ({
			...order, hasAlreadyBeenOrdered: false
		}));

		const openedMenu = copyOfMenu.map((menuItem) => ({
			...menuItem, hasAlreadyBeenOrdered: false
		}));

		setAllMenu(openedMenu);
		setAllOrders(openedOrders);
	};

	const toConfirmPurchase = () => {
		toOpenMenuAndOrders();
		setActuallyPage('confirm');
	};

	const toCancelPurchase = () => {
		toOpenMenuAndOrders();
		setActuallyPage('cancel');
	};

	useEffect(() => {
		loadMenuAndPrice();
	}, []);

	useEffect(() => {
		const sum = calcSum(allOrders);
		setAccountValue(sum);
	}, [allOrders]);

	const memoizedContext = useMemo(
		() => (
			{
				actuallyPage, funcSetActuallyPage, allMenu, allOrders, addOrder, removeOrder,
				ordersCounter, accountValue, setTheAmount, isClosedAccount, toCloseAccount,
				toConfirmPurchase, toCancelPurchase
			}
		),
		[
			actuallyPage, allMenu, allOrders,
			ordersCounter, accountValue, setTheAmount, isClosedAccount, toCloseAccount
		]
	);

    return (
		<div className="App">
			<RenderIf condition={ mustRenderHeader(actuallyPage) }>
				<Header>
					<NavBar actuallyPage={actuallyPage} funcSetActuallyPage={funcSetActuallyPage} ordersCounter={ordersCounter} />
				</Header>
			</RenderIf>
			<AppContext.Provider value={memoizedContext}>
				<AppRoutes />
			</AppContext.Provider>
			<RenderIf condition={ actuallyPage !== 'error' }>
				<ShadowEffect />
			</RenderIf>
		</div>
    );
}
