import React from 'react';

import PropTypes from 'prop-types';
import NavBar from '../NavBar';

import './style.css';

export default function Header({ actuallyLink, funcSetActuallyLink }) {
	return (
		<header className="Header">
			<NavBar actuallyLink={actuallyLink} funcSetActuallyLink={funcSetActuallyLink} />
		</header>
	);
}

Header.propTypes = {
	actuallyLink: PropTypes.string.isRequired,
	funcSetActuallyLink: PropTypes.func.isRequired
};
