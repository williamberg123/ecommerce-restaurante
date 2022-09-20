import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import AppRoutes from './routes';
import AppProvider from './contexts/AppProvider';

import { GlobalStyles } from './styles/globalStyles';
import { loadMenu, menuLoading } from './state/menu/menuSlice';
import removeDuplicateItems from './utils/removeDuplicateItems';
import { loadAllMenu } from './services/menuApi';
import { getOrders } from './state/orders/ordersSlice';

export default function App() {
	const dispatch = useDispatch();
	const menu = useSelector((state) => state.menu.data);

	const getMenu = async () => {
		dispatch(menuLoading(true));
		const menuAndPrice = removeDuplicateItems(await loadAllMenu());
		dispatch(loadMenu(menuAndPrice));
		dispatch(menuLoading(false));
	};

	useEffect(() => {
		getMenu();
	}, []);

	useEffect(() => {
		dispatch(getOrders({ menu }));
	}, [menu]);

	return (
		<BrowserRouter>
			<AppProvider>
				<AppRoutes />
				<GlobalStyles />
			</AppProvider>
		</BrowserRouter>
	);
}
