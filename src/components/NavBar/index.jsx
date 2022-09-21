import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Nav } from './styles';

export default function NavBar() {
	const { page, ordersCounter } = useSelector((state) => state);

	return (
		<Nav>
			<ul>
				<li><NavLink className={`${page === 'home' ? 'actually-page' : ''}`} to="/ecommerce-restaurante/">HOME</NavLink></li>
				<li><NavLink className={`${page === 'menu' ? 'actually-page' : ''}`} to="/ecommerce-restaurante/cardapio">CARDÁPIO</NavLink></li>
				<li>
					<NavLink className={`${page === 'order' ? 'actually-page' : ''}`} to="/ecommerce-restaurante/pedidos">
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
