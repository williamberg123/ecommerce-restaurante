import React from 'react';

import PropTypes from 'prop-types';

import './style.css';

export default function MenuContainer({ children }) {
	return (
		<div className="MenuContainer">
			{children}
		</div>
	);
}

MenuContainer.propTypes = {
	children: PropTypes.node.isRequired
};
