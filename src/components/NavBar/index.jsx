import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../contexts/AppProvider/context';

import { Nav } from './styles';

export default function NavBar() {
	const { actuallyPage, ordersCounter } = useContext(AppContext);

	return (
		<Nav>
			<ul>
				<li><NavLink className={`${actuallyPage === 'home' ? 'actually-page' : ''}`} to="/ecommerce-restaurante/">HOME</NavLink></li>
				<li><NavLink className={`${actuallyPage === 'menu' ? 'actually-page' : ''}`} to="/ecommerce-restaurante/cardapio">CARDÁPIO</NavLink></li>
				<li>
					<NavLink className={`${actuallyPage === 'order' ? 'actually-page' : ''}`} to="/ecommerce-restaurante/pedidos">
						SEUS PEDIDOS
						{
							!!ordersCounter && (
								<div className="orders-counter">
									{
										`+${ordersCounter}`
									}
								</div>
							)
						}
					</NavLink>
				</li>
			</ul>
		</Nav>
	);
}
