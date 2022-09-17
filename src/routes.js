import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import OrderPage from './pages/OrderPage';
import MenuPage from './pages/MenuPage';
import AccountPage from './pages/AccountPage';
import ErrorPage from './pages/ErrorPage';
import ConfirmedPurchasePage from './pages/ConfirmationPage';
import CancelPurchasePage from './pages/CancelPage';

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
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
}
