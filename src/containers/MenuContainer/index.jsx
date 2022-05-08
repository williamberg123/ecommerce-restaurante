import React from 'react';

import PropTypes from 'prop-types';

import MenuItem from '../../components/MenuItem';

import './style.css';

export default function MenuContainer({ allMenuData }) {
	const menuContent = allMenuData.map((menuItem) => {
		const {
			menuname,
			description,
			_id,
			price,
			imageUrl
		} = menuItem;

		return (
			<MenuItem
				key={_id}
				itemId={_id}
				name={menuname}
				description={description}
				price={price}
				imageUrl={imageUrl}
			/>
		);
	});

	return (
		<div className="MenuContainer">
			<h1>cardápio disponível</h1>
			<div className="MenuContainer-items">
				{menuContent}
			</div>
		</div>
	);
}

MenuContainer.propTypes = {
	allMenuData: PropTypes.instanceOf(Array).isRequired
};
