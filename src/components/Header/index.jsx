import React, { memo } from 'react';

import PropTypes from 'prop-types';

import './style.css';

function Header({ children }) {
	return (
		<header className="Header">
			{children}
		</header>
	);
}

Header.propTypes = {
	children: PropTypes.node.isRequired
};

export default memo(Header);
