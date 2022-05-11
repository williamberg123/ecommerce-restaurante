import React from 'react';

import PropTypes from 'prop-types';

import MenuItem from '../../components/MenuItem';

import './style.css';

export default function MenuItems({ dataToBeShown }) {
	const menuChildren = dataToBeShown.map((menuItem) => {
		const {
			menuname,
			description,
			_id,
			price,
			imageUrl,
			hasAlreadyBeenOrdered
		} = menuItem;

		return (
			<MenuItem
				key={_id}
				itemId={_id}
				name={menuname}
				description={description}
				price={price}
				imageUrl={imageUrl}
				hasAlreadyBeenOrdered={hasAlreadyBeenOrdered}
			/>
		);
	});

	return (
		<div className="MenuContainer-items">
			{menuChildren}
		</div>
	);
}

MenuItems.propTypes = {
	dataToBeShown: PropTypes.instanceOf(Array).isRequired
};
