import React from 'react';

import PropTypes from 'prop-types';

import './style.css';
import MenuItemInfo from '../../containers/MenuItemInfo';

export default function MenuItem({
	name, description, itemId, price, imageUrl, funcOrder, hasAlreadyBeenOrdered, whichIconMustHave
}) {
	const propsOfItemInfo = {
		name,
		description,
		itemId,
		price,
		imageUrl,
		funcOrder,
		hasAlreadyBeenOrdered,
		whichIconMustHave
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
	funcOrder: PropTypes.func.isRequired,
	hasAlreadyBeenOrdered: PropTypes.bool.isRequired,
	whichIconMustHave: PropTypes.string.isRequired
};
