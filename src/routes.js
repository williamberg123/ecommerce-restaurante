import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PropTypes from 'prop-types';

import Home from './templates/Home';
import OrderPage from './templates/OrderPage';
import MenuPage from './templates/MenuPage';
import MenuItemPage from './templates/MenuItemPage';

export default function AppRoutes({ actuallyLink, funcSetActuallyLink, allMenuData }) {
	return (
		<Routes>
			<Route
				path="/ecommerce-restaurante/"
				element={(
					<Home
						actuallyLink={actuallyLink}
						funcSetActuallyLink={funcSetActuallyLink}
					/>
				)}
			/>
			<Route
				path="/ecommerce-restaurante/cardapio"
				element={(
					<MenuPage
						actuallyLink={actuallyLink}
						funcSetActuallyLink={funcSetActuallyLink}
						allMenuData={allMenuData}
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
						actuallyLink={actuallyLink}
						funcSetActuallyLink={funcSetActuallyLink}
						allMenuData={allMenuData}
					/>
				)}
			/>
		</Routes>
	);
}

AppRoutes.propTypes = {
	actuallyLink: PropTypes.string.isRequired,
	funcSetActuallyLink: PropTypes.func.isRequired,
	allMenuData: PropTypes.instanceOf(Array).isRequired
};
