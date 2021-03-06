import { useContext } from 'react';
import { CgMenuRound } from 'react-icons/cg';

import AppRoutes from '../../routes';

import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import RenderIf from '../../components/RenderIf';
import ShadowEffect from '../../components/ShadowEffect';

import mustRenderHeader from '../../utils/mustRenderHeader';

import './styles.css';
import MenuProvider from '../../contexts/MenuProvider';
import OrdersProvider from '../../contexts/OrdersProvider';

import AppContext from '../../contexts/AppProvider/context';

export default function App() {
	const { actuallyPage, funcSetActuallyPage, ordersCounter, toggleNavBar } = useContext(AppContext);
	const screenWidth = window.screen.width;

    return (
		<div className="App">
			<RenderIf condition={ mustRenderHeader(actuallyPage) }>
				<Header>
					<NavBar
						actuallyPage={actuallyPage}
						funcSetActuallyPage={funcSetActuallyPage}
						ordersCounter={ordersCounter}
					/>
					<RenderIf condition={ screenWidth <= 600 }>
						<CgMenuRound onClick={toggleNavBar} />
					</RenderIf>
				</Header>
			</RenderIf>

			<MenuProvider>
				<OrdersProvider>
					<AppRoutes />
				</OrdersProvider>
			</MenuProvider>

			<RenderIf condition={ actuallyPage !== 'error' }>
				<ShadowEffect />
			</RenderIf>
		</div>
    );
}
