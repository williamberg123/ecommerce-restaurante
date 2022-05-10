import React from 'react';

import PropTypes from 'prop-types';
import NavBar from '../NavBar';

import './style.css';

export default function Header({ actuallyPage, funcSetActuallyPage }) {
	return (
		<header className="Header">
			<NavBar actuallyPage={actuallyPage} funcSetActuallyPage={funcSetActuallyPage} />
		</header>
	);
}

Header.propTypes = {
	actuallyPage: PropTypes.string.isRequired,
	funcSetActuallyPage: PropTypes.func.isRequired
};
