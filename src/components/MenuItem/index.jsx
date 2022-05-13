import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';

import { FaPlus } from 'react-icons/fa';

import MenuItemContainer from '../../containers/MenuItemContainer';
import MenuItemInfo from '../../containers/ItemInfo';
import Image from '../Image';
import ButtonAddOrder from '../ButtonAddOrder';

import AppContext from '../../AppContext';

import './style.css';

function MenuItem({
	menuname, description, _id, price, imageUrl, hasAlreadyBeenOrdered, theAmount
}) {
	const { setTheAmount } = useContext(AppContext);

	return (
		<div className="MenuItem">
			<MenuItemContainer>
				<MenuItemInfo>
					<Image imageUrl={imageUrl} altName={menuname} />
					<div className="MenuItem-text">
						<h2>{menuname.toLowerCase()}</h2>
						<p>{description}</p>
						<div className="MenuItemConfig">
							<span id="item-value" className="item-value">
								R$ {price}
							</span>

							<span className="MenuItemConfig">
								<button disabled={hasAlreadyBeenOrdered} onClick={() => setTheAmount('remove', _id)} type="button">
									-
								</button>

								<input disabled={hasAlreadyBeenOrdered} type="number" value={theAmount} readOnly />

								<button disabled={hasAlreadyBeenOrdered} onClick={() => setTheAmount('add', _id)} type="button">
									<FaPlus />
								</button>
							</span>
						</div>
					</div>
				</MenuItemInfo>
				<ButtonAddOrder
					hasAlreadyBeenOrdered={hasAlreadyBeenOrdered}
					itemId={_id}
				/>
			</MenuItemContainer>
		</div>
	);
}

MenuItem.propTypes = {
	menuname: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	_id: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	hasAlreadyBeenOrdered: PropTypes.bool.isRequired,
	theAmount: PropTypes.number.isRequired
};

export default memo(MenuItem);
