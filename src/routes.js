import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import OrderPage from './pages/OrderPage';
import MenuPage from './pages/MenuPage';
import AccountPage from './pages/AccountPage';
import ErrorPage from './pages/ErrorPage';
import ConfirmedPurchasePage from './pages/ConfirmationPage';
import CancelPurchasePage from './pages/CancelPage';
import { AppContext } from './contexts/AppProvider/context';

export default function AppRoutes() {
	const { isClosedAccount } = useContext(AppContext);

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
				element={isClosedAccount ? <AccountPage /> : <Navigate to="/ecommerce-restaurante/" />}
			/>
			<Route
				path="/ecommerce-restaurante/confirm"
				element={<ConfirmedPurchasePage />}
			/>
			<Route
				path="/ecommerce-restaurante/cancel"
				element={<CancelPurchasePage />}
			/>
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
}
