import MenuProvider from './contexts/MenuProvider';
import OrdersProvider from './contexts/OrdersProvider';
import AppProvider from './contexts/AppProvider';

import Dashboard from './pages/Dashboard';
import { GlobalStyles } from './styles/globalStyles';

export default function App() {
	return (
		<AppProvider>
			<MenuProvider>
				<OrdersProvider>
					<Dashboard />
					<GlobalStyles />
				</OrdersProvider>
			</MenuProvider>
		</AppProvider>
	);
}
