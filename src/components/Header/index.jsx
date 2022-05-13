import React, { memo } from 'react';

import NavBar from '../NavBar';

import './style.css';

function Header() {
	return (
		<header className="Header">
			<NavBar />
		</header>
	);
}

export default memo(Header);
