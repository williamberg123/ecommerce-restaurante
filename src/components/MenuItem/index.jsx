import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import './style.css';

export default function MenuItem({ name, description, itemId, price, imageUrl }) {
	return (
		<div className="MenuItem">
			<Link to={`/ecommerce-restaurante/cardapio/${itemId}`}>
				<div className="MenuItem-info">
					<img src={imageUrl} alt={name} />
					<h2>{name}</h2>
					<p>{description}</p>
					<p className="item-price">
						R$
						<span className="item-value">
							{price}
						</span>
					</p>
				</div>
			</Link>
			<button type="button">adicionar aos pedidos</button>
		</div>
	);
}

MenuItem.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	itemId: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired
};
