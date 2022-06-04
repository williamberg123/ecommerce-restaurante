import React, { useState, useEffect, useCallback, useMemo } from 'react';

import AppRoutes from '../../routes';

import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import RenderIf from '../../components/RenderIf';
import ShadowEffect from '../../components/ShadowEffect';

import AppProvider from '../../contexts/AppProvider';

import mustRenderHeader from '../../utils/mustRenderHeader';

import './styles.css';
import MenuProvider from '../../contexts/MenuProvider';
import OrdersProvider from '../../contexts/OrdersProvider';

export default function App() {
	const [ actuallyPage, setActuallyPage ] = useState('home');
	const [ ordersCounter, setOrdersCounter ] = useState(0);
	const [ isClosedAccount, setIsClosedAccount ] = useState(false);

	const funcSetActuallyPage = useCallback((page) => {
		setActuallyPage(page);
		if (page === 'order') {
			setOrdersCounter(0);
		}
	}, []);

	const toOpenMenuAndOrders = () => {
		// menuDispatch({ type: 'toOpenMenu', payload: { menu } });
		// ordersDispatch({ type: 'toOpenMenu', payload: { orders } });
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
		// const sum = calcSum(orders);
		// setAccountValue(sum);
	}, []);

	const memoizedContext = useMemo(
		() => (
			{
				actuallyPage, funcSetActuallyPage, ordersCounter, isClosedAccount,
				toConfirmPurchase, toCancelPurchase, setOrdersCounter, setIsClosedAccount
			}
		),
		[
			actuallyPage, ordersCounter, isClosedAccount
		]
	);

    return (
		<div className="App">
			<RenderIf condition={ mustRenderHeader(actuallyPage) }>
				<Header>
					<NavBar actuallyPage={actuallyPage} funcSetActuallyPage={funcSetActuallyPage} ordersCounter={ordersCounter} />
				</Header>
			</RenderIf>

			<AppProvider value={memoizedContext}>
				<MenuProvider>
					<OrdersProvider>
						<AppRoutes />
					</OrdersProvider>
				</MenuProvider>
			</AppProvider>

			<RenderIf condition={ actuallyPage !== 'error' }>
				<ShadowEffect />
			</RenderIf>
		</div>
    );
}
