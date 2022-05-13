import React from 'react';
import PropTypes from 'prop-types';

export default function MenuItemInfo({ children }) {
	return (
		<div className="MenuItemInfo">
			{children}
		</div>
	);
}

MenuItemInfo.propTypes = {
	children: PropTypes.node.isRequired
};
