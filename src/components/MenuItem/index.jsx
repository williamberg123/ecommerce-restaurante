import React, { memo } from 'react';

import PropTypes from 'prop-types';

import MenuItemInfo from '../../containers/MenuItemInfo';

import './style.css';

function MenuItem({
	menuname, description, _id, price, imageUrl, hasAlreadyBeenOrdered
}) {
	const propsOfItemInfo = {
		menuname,
		description,
		_id,
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
	menuname: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	_id: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	hasAlreadyBeenOrdered: PropTypes.bool.isRequired
};

export default memo(MenuItem);
