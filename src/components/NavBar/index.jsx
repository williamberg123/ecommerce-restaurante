import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import './style.css';

export default function NavBar({ actuallyLink, funcSetActuallyLink }) {
	return (
		<nav className="NavBar">
			<ul>
				<li><Link onClick={funcSetActuallyLink} className={`${actuallyLink === 'home' ? 'actually-link' : ''}`} to="/ecommerce-restaurante/">HOME</Link></li>
				<li><Link onClick={funcSetActuallyLink} className={`${actuallyLink === 'menu' ? 'actually-link' : ''}`} to="/ecommerce-restaurante/cardapio">CARDÁPIO</Link></li>
				<li><Link onClick={funcSetActuallyLink} className={`${actuallyLink === 'order' ? 'actually-link' : ''}`} to="/ecommerce-restaurante/pedidos">SEUS PEDIDOS</Link></li>
			</ul>
		</nav>
	);
}

NavBar.propTypes = {
	actuallyLink: PropTypes.string.isRequired,
	funcSetActuallyLink: PropTypes.func.isRequired
};
