import React from 'react';

import PropTypes from 'prop-types';

import MenuContainerContext from './MenuContainerContext';

import './style.css';

export default function MenuContainer({ children }) {
	return (
		<div className="MenuContainer">
			<MenuContainerContext.Provider>
				{children}
			</MenuContainerContext.Provider>
		</div>
	);
}

MenuContainer.propTypes = {
	children: PropTypes.node.isRequired
};
