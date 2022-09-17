import React, { memo, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AppContext } from '../../contexts/AppProvider/context';
import './style.css';

function NavBar() {
	const { ulRef, actuallyPage, funcSetActuallyPage, ordersCounter } = useContext(AppContext);

	return (
		<nav className="NavBar">
			<ul ref={ulRef}>
				<li><NavLink onClick={() => funcSetActuallyPage('home')} className={`${actuallyPage === 'home' ? 'actually-page' : ''}`} to="/ecommerce-restaurante/">HOME</NavLink></li>
				<li><NavLink onClick={() => funcSetActuallyPage('menu')} className={`${actuallyPage === 'menu' ? 'actually-page' : ''}`} to="/ecommerce-restaurante/cardapio">CARDÁPIO</NavLink></li>
				<li>
					<NavLink onClick={() => funcSetActuallyPage('order')} className={`${actuallyPage === 'order' ? 'actually-page' : ''}`} to="/ecommerce-restaurante/pedidos">
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
		</nav>
	);
}

export default memo(NavBar);
