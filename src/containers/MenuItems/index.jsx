import React from 'react';

import PropTypes from 'prop-types';

import MenuItem from '../../components/MenuItem';

import './style.css';

export default function MenuItems({ dataToBeShown }) {
	const menuChildren = dataToBeShown.map((menuItem) => (
			<MenuItem
				key={menuItem['_id']}
				/* eslint-disable react/jsx-props-no-spreading */
				{...menuItem}
			/>
		));

	return (
		<div className="MenuContainer-items">
			{menuChildren}
		</div>
	);
}

MenuItems.propTypes = {
	dataToBeShown: PropTypes.instanceOf(Array).isRequired
};
