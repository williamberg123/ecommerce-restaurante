import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import './style.css';

export default function NavBar({ actuallyPage, funcSetActuallyPage }) {
	return (
		<nav className="NavBar">
			<ul>
				<li><Link onClick={() => funcSetActuallyPage('home')} className={`${actuallyPage === 'home' ? 'actually-link' : ''}`} to="/ecommerce-restaurante/">HOME</Link></li>
				<li><Link onClick={() => funcSetActuallyPage('menu')} className={`${actuallyPage === 'menu' ? 'actually-link' : ''}`} to="/ecommerce-restaurante/cardapio">CARDÁPIO</Link></li>
				<li><Link onClick={() => funcSetActuallyPage('order')} className={`${actuallyPage === 'order' ? 'actually-link' : ''}`} to="/ecommerce-restaurante/pedidos">SEUS PEDIDOS</Link></li>
			</ul>
		</nav>
	);
}

NavBar.propTypes = {
	actuallyPage: PropTypes.string.isRequired,
	funcSetActuallyPage: PropTypes.func.isRequired
};
