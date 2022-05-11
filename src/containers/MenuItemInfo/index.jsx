import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import Image from '../../components/Image';
import ButtonAddOrder from '../../components/ButtonAddOrder';

export default function ItemInfo({ itemData }) {
	const { name, description, itemId, price, imageUrl, hasAlreadyBeenOrdered } = itemData;

	return (
		<div className="MenuItem-info">
			<Link to={`/ecommerce-restaurante/cardapio/${itemId}`}>
				<Image imageUrl={imageUrl} altName={name} />
				<div className="MenuItem-text">
					<h2>{name.toLowerCase()}</h2>
					<p>{description}</p>
					<p className="item-price">
						R$
						<span id="item-value" className="item-value">
							{price}
						</span>
					</p>
				</div>
			</Link>
			<ButtonAddOrder
				hasAlreadyBeenOrdered={hasAlreadyBeenOrdered}
				itemId={itemId}
			/>
		</div>
	);
}

ItemInfo.propTypes = {
	itemData: PropTypes.instanceOf(Object).isRequired
};
