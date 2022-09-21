import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import OrderPage from './pages/OrderPage';
import MenuPage from './pages/MenuPage';
import AccountPage from './pages/AccountPage';
import ErrorPage from './pages/ErrorPage';
import ConfirmedPurchasePage from './pages/ConfirmationPage';

export default function AppRoutes() {
	const { isClosedAccount } = useSelector((state) => state);

	return (
		<Routes>
			<Route path="/ecommerce-restaurante/" element={<Dashboard />}>
				<Route path="" element={<Home />} />

				<Route path="cardapio" element={<MenuPage />} />

				<Route path="pedidos" element={<OrderPage />}>
					<Route path="conta" element={isClosedAccount ? <AccountPage /> : <Navigate to="/ecommerce-restaurante/pedidos" />} />
				</Route>
			</Route>

			<Route
				path="/ecommerce-restaurante/confirm"
				element={<ConfirmedPurchasePage />}
			/>

			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
}
