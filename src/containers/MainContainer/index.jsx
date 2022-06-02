import React from 'react';

import PropTypes from 'prop-types';

import './style.css';

export default function MainContainer({ children }) {
	return (
		<div className="MainContainer">
			{children}
		</div>
	);
}

MainContainer.propTypes = {
	children: PropTypes.node.isRequired
};
