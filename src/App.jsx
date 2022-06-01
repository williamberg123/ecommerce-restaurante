import React, { useState, useEffect, useCallback, useMemo, useReducer } from 'react';

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
import menuReducer from './utils/menuReducer';
import ordersReducer from './utils/ordersReducer';

import './App.css';

export default function App() {
	const [ actuallyPage, setActuallyPage ] = useState('home');
	const [ menu, menuDispatch ] = useReducer(menuReducer, []);
	const [ orders, ordersDispatch ] = useReducer(ordersReducer, []);
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

	const loadMenuAndPrice = useCallback(async () => {
		const menuAndPrice = removeDuplicateItems(await loadAllMenu(baseUrl));
		menuDispatch({ type: 'firstLoad', payload: { data: menuAndPrice } });
	}, []);

	const toCloseAccount = (e) => {
		const copyOfOrders = [...orders];

		if (!copyOfOrders.length) {
			e.preventDefault();
			alert('Você não adicionou nenhum pedido');
			return;
		}

		menuDispatch({ type: 'toCloseAccount', payload: { menu } });
		ordersDispatch({ type: 'toCloseAccount', payload: { orders } });

		setIsClosedAccount(true);
		setActuallyPage('account');
	};

	const toOpenMenuAndOrders = () => {
		menuDispatch({ type: 'toOpenMenu', payload: { menu } });
		ordersDispatch({ type: 'toOpenMenu', payload: { orders } });
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
		const sum = calcSum(orders);
		setAccountValue(sum);
	}, [orders]);

	const memoizedContext = useMemo(
		() => (
			{
				actuallyPage, funcSetActuallyPage, ordersCounter, accountValue, isClosedAccount,
				toCloseAccount, toConfirmPurchase, toCancelPurchase, ordersDispatch, orders,
				menuDispatch, menu
			}
		),
		[
			actuallyPage, ordersCounter, accountValue, isClosedAccount, toCloseAccount,
			ordersDispatch, orders, menuDispatch, menu
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
