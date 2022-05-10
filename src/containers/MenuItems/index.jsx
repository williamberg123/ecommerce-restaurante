import React from 'react';

import PropTypes from 'prop-types';

import MenuItem from '../../components/MenuItem';

import './style.css';

export default function MenuItems({ allMenuData, funcOrder, whichIconMustHave }) {
	const menuContent = allMenuData.map((menuItem) => {
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
				funcOrder={funcOrder}
				hasAlreadyBeenOrdered={hasAlreadyBeenOrdered}
				whichIconMustHave={whichIconMustHave}
			/>
		);
	});

	return (
		<div className="MenuContainer-items">
				{menuContent}
		</div>
	);
}

MenuItems.propTypes = {
	allMenuData: PropTypes.instanceOf(Array).isRequired,
	funcOrder: PropTypes.func.isRequired,
	whichIconMustHave: PropTypes.string.isRequired
};
