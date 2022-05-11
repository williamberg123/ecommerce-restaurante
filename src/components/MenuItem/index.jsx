import React, { memo } from 'react';

import PropTypes from 'prop-types';

import MenuItemInfo from '../../containers/MenuItemInfo';

import './style.css';

function MenuItem({
	name, description, itemId, price, imageUrl, hasAlreadyBeenOrdered
}) {
	console.log('MENU ITEM RENDERIZOU');
	const propsOfItemInfo = {
		name,
		description,
		itemId,
		price,
		imageUrl,
		hasAlreadyBeenOrdered
	};

	return (
		<div className="MenuItem">
			<MenuItemInfo
				itemData={propsOfItemInfo}
			/>
		</div>
	);
}

MenuItem.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	itemId: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	hasAlreadyBeenOrdered: PropTypes.bool.isRequired
};

export default memo(MenuItem);
