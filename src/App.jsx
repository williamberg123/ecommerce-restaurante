import MenuProvider from './contexts/MenuProvider';
import OrdersProvider from './contexts/OrdersProvider';
import AppProvider from './contexts/AppProvider';

import { GlobalStyles } from './styles/globalStyles';
import AppRoutes from './routes';

export default function App() {
	return (
		<AppProvider>
			<MenuProvider>
				<OrdersProvider>
					<AppRoutes />
					<GlobalStyles />
				</OrdersProvider>
			</MenuProvider>
		</AppProvider>
	);
}
