import React, { useState, useEffect, useCallback, useMemo } from 'react';

import AppRoutes from './routes';

import AppContext from './AppContext';

import loadAllMenu from './utils/fetchAllMenuData';
import calcSum from './utils/calculateAccount';

import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import RenderIf from './components/RenderIf';

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

	const updateAllMenu = useCallback((item, itemIndex) => {
		const copyOfAllMenu = [...allMenu];
		item.hasAlreadyBeenOrdered = !item.hasAlreadyBeenOrdered;

		copyOfAllMenu[itemIndex] = item;
		setAllMenu(copyOfAllMenu);
	}, [allMenu]);

	const addNewOrder = (item) => {
		const copyOfOrders = [ ...allOrders ];
		const order = { ...item };

		order.hasAlreadyBeenOrdered = false;
		copyOfOrders.push(order);

		setAllOrders(copyOfOrders);
		setOrdersCounter(ordersCounter + 1);
	};

	const removeOneOrder = (itemIndexInOrders) => {
		const copyOfOrders = [ ...allOrders ];
		copyOfOrders.splice(itemIndexInOrders, 1);

		setAllOrders(copyOfOrders);
	};

	const addOrder = (e, menuItemId) => {
		const copyOfAllMenu = [...allMenu];

		const itemIndex = copyOfAllMenu.findIndex((item) => item['_id'] === menuItemId);
		const item = copyOfAllMenu.find((item) => item['_id'] === menuItemId);

		addNewOrder(item);
		updateAllMenu(item, itemIndex, copyOfAllMenu);
	};

	const removeOrder = (e, menuItemId) => {
		const copyOfAllMenu = [...allMenu];
		const copyOfAllOrders = [...allOrders];

		const itemIndexInMenu = copyOfAllMenu.findIndex((item) => item['_id'] === menuItemId);
		const itemIndexInOrders = copyOfAllOrders.findIndex((item) => item['_id'] === menuItemId);

		const item = copyOfAllMenu.find((item) => item['_id'] === menuItemId);

		removeOneOrder(itemIndexInOrders);
		updateAllMenu(item, itemIndexInMenu, copyOfAllMenu);
	};

	const removeDuplicateItems = (arrayOfObjects) => {
		const copyOfArray = arrayOfObjects;

		for (const obj of arrayOfObjects) {
			copyOfArray.forEach((item, index) => {
				if (!(index === arrayOfObjects.indexOf(obj))) {
					if (obj.menuname === item.menuname) {
						copyOfArray.splice(index, 1);
					}
				}
			});
		}

		return copyOfArray;
	};

	const loadMenuAndPrice = async () => {
		let menuAndPrice = await loadAllMenu(baseUrl);
		menuAndPrice = removeDuplicateItems(menuAndPrice);
		setAllMenu(menuAndPrice);
	};

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

	const toCloseAccount = () => {
		const copyOfOrders = [...allOrders];
		const copyOfMenu = [...allMenu];

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

	const toConfirmPurchase = () => {
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
		setActuallyPage('error');
	};

	const toCancelPurchase = () => {

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
			actuallyPage, funcSetActuallyPage, allMenu, allOrders, addOrder, removeOrder,
			ordersCounter, accountValue, setTheAmount, isClosedAccount, toCloseAccount,
			toConfirmPurchase, toCancelPurchase
		]
	);

    return (
		<div className="App">
			<RenderIf condition={ actuallyPage !== 'error' }>
				<Header>
					<NavBar actuallyPage={actuallyPage} funcSetActuallyPage={funcSetActuallyPage} ordersCounter={ordersCounter} />
				</Header>
			</RenderIf>
			<AppContext.Provider value={memoizedContext}>
				<AppRoutes />
			</AppContext.Provider>
		</div>
    );
}
