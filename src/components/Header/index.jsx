import React, { memo } from 'react';

import NavBar from '../NavBar';

import './style.css';

function Header() {
	console.log('HEADER RENDERIZOU');

	return (
		<header className="Header">
			<NavBar />
		</header>
	);
}

export default memo(Header);
