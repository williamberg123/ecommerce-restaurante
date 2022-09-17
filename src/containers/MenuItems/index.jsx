import React, { useContext } from 'react';

import MenuItem from '../../components/MenuItem';
import { AppContext } from '../../contexts/AppProvider/context';
import MenuContext from '../../contexts/MenuProvider/context';

import './style.css';

export default function MenuItems() {
	const { isClosedAccount } = useContext(AppContext);

	const { menu } = useContext(MenuContext);

	const menuChildren = menu.map((menuItem) => (
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
