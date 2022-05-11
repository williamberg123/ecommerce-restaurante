import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../../AppContext';

import './style.css';

export default function NavBar() {
	console.log('NAVBAR RENDERIZOU');
	const { actuallyPage, funcSetActuallyPage } = useContext(AppContext);

	return (
		<nav className="NavBar">
			<ul>
				<li><Link onClick={() => funcSetActuallyPage('home')} className={`${actuallyPage === 'home' ? 'actually-page' : ''}`} to="/ecommerce-restaurante/">HOME</Link></li>
				<li><Link onClick={() => funcSetActuallyPage('menu')} className={`${actuallyPage === 'menu' ? 'actually-page' : ''}`} to="/ecommerce-restaurante/cardapio">CARDÁPIO</Link></li>
				<li><Link onClick={() => funcSetActuallyPage('order')} className={`${actuallyPage === 'order' ? 'actually-page' : ''}`} to="/ecommerce-restaurante/pedidos">SEUS PEDIDOS</Link></li>
			</ul>
		</nav>
	);
}
