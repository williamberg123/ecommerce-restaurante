import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PropTypes from 'prop-types';

import Home from './templates/Home';
import OrderPage from './templates/OrderPage';
import MenuPage from './templates/MenuPage';
import MenuItemPage from './templates/MenuItemPage';

export default function AppRoutes({
	allMenuData, allOrders, actuallyPage, funcSetActuallyPage, funcAddOrder, funcRemoveOrder
}) {
	return (
		<Routes>
			<Route
				path="/ecommerce-restaurante/"
				element={(
					<Home
						actuallyPage={actuallyPage}
						funcSetActuallyPage={funcSetActuallyPage}
					/>
				)}
			/>
			<Route
				path="/ecommerce-restaurante/cardapio"
				element={(
					<MenuPage
						allMenuData={allMenuData}
						actuallyPage={actuallyPage}
						funcSetActuallyPage={funcSetActuallyPage}
						funcOrder={funcAddOrder}
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
						allOrders={allOrders}
						actuallyPage={actuallyPage}
						funcSetActuallyPage={funcSetActuallyPage}
						funcOrder={funcRemoveOrder}
					/>
				)}
			/>
		</Routes>
	);
}

AppRoutes.propTypes = {
	allMenuData: PropTypes.instanceOf(Array).isRequired,
	allOrders: PropTypes.instanceOf(Array).isRequired,
	actuallyPage: PropTypes.string.isRequired,
	funcSetActuallyPage: PropTypes.func.isRequired,
	funcAddOrder: PropTypes.func.isRequired,
	funcRemoveOrder: PropTypes.func.isRequired
};
