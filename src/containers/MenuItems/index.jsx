import React, { useContext } from 'react';

import PropTypes from 'prop-types';

import MenuItem from '../../components/MenuItem';

import './style.css';
import AppContext from '../../AppContext';

export default function MenuItems({ dataToBeShown }) {
	const { isClosedAccount } = useContext(AppContext);

	const menuChildren = dataToBeShown.map((menuItem) => (
		<MenuItem
			key={menuItem['_id']}
			/* eslint-disable react/jsx-props-no-spreading */
			{...menuItem}
			isClosedAccount={isClosedAccount}
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
