import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './templates/Home';
import OrderPage from './templates/OrderPage';
import MenuPage from './templates/MenuPage';
import AccountPage from './templates/AccountPage';
import ErrorPage from './templates/ErrorPage';

import ConfirmedPurchasePage from './templates/ConfirmationPage';
import CancelPurchasePage from './templates/CancelPage';

export default function AppRoutes() {
	return (
		<Routes>
			<Route
				index
				path="/ecommerce-restaurante/"
				element={<Home />}
			/>
			<Route
				path="/ecommerce-restaurante/cardapio"
				element={<MenuPage />}
			/>
			<Route
				path="/ecommerce-restaurante/pedidos"
				element={<OrderPage />}
			/>
			<Route
				path="/ecommerce-restaurante/conta"
				element={<AccountPage />}
			/>
			<Route
				path="/ecommerce-restaurante/confirm"
				element={<ConfirmedPurchasePage />}
			/>
			<Route
				path="/ecommerce-restaurante/cancel"
				element={<CancelPurchasePage />}
			/>
			<Route path="*" element={ <ErrorPage /> } />
		</Routes>
	);
}
