import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './templates/Home';
import OrderPage from './templates/OrderPage';
import MenuPage from './templates/MenuPage';
import MenuItemPage from './templates/MenuItemPage';

import AppContext from './AppContext';

export default function AppRoutes() {
	const { addOrder, removeOrder } = useContext(AppContext);

	return (
		<Routes>
			<Route
				path="/ecommerce-restaurante/"
				element={(
					<Home />
				)}
			/>
			<Route
				path="/ecommerce-restaurante/cardapio"
				element={(
					<MenuPage
						funcOrder={addOrder}
					/>
				)}
			/>
			<Route
				path="/ecommerce-restaurante/cardapio/:itemid"
				element={(
					<MenuItemPage />
				)}
			/>
			<Route
				path="/ecommerce-restaurante/pedidos"
				element={(
					<OrderPage
						funcOrder={removeOrder}
					/>
				)}
			/>
		</Routes>
	);
}
