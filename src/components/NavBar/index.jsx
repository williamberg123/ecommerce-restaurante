import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import './style.css';
import Context from '../../contexts/AppProvider/context';

function NavBar({ actuallyPage, funcSetActuallyPage, ordersCounter }) {
	const { ulRef } = useContext(Context);

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

NavBar.propTypes = {
	actuallyPage: PropTypes.string.isRequired,
	funcSetActuallyPage: PropTypes.func.isRequired,
	ordersCounter: PropTypes.number.isRequired,
};

export default memo(NavBar);
