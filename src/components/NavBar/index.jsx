import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../../AppContext';

import './style.css';

export default function NavBar() {
	const { actuallyPage, funcSetActuallyPage, ordersCounter } = useContext(AppContext);

	return (
		<nav className="NavBar">
			<ul>
				<li><Link onClick={() => funcSetActuallyPage('home')} className={`${actuallyPage === 'home' ? 'actually-page' : ''}`} to="/ecommerce-restaurante/">HOME</Link></li>
				<li><Link onClick={() => funcSetActuallyPage('menu')} className={`${actuallyPage === 'menu' ? 'actually-page' : ''}`} to="/ecommerce-restaurante/cardapio">CARDÁPIO</Link></li>
				<li>
					<Link onClick={() => funcSetActuallyPage('order')} className={`${actuallyPage === 'order' ? 'actually-page' : ''}`} to="/ecommerce-restaurante/pedidos">
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
					</Link>
				</li>
			</ul>
		</nav>
	);
}
