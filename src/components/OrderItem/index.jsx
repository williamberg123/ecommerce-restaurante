import { useContext } from 'react';
import PropTypes from 'prop-types';

import MenuItemContainer from '../../containers/MenuItemContainer';
import MenuItemInfo from '../../containers/ItemInfo';
import Image from '../Image';
import RemoveOrderButton from '../RemoveOrderButton';
import ButtonOfTheAmount from '../AmountButton';
import RenderIf from '../RenderIf';

import './style.css';
import { AppContext } from '../../contexts/AppProvider/context';

export default function OrderItem(props) {
	const { menuname, description, _id, price, imageUrl, hasAlreadyBeenOrdered, theAmount } = props;
	const { isClosedAccount } = useContext(AppContext);

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
								<ButtonOfTheAmount _id={_id} buttonAction="removeOne" hasAlreadyBeenOrdered={hasAlreadyBeenOrdered} />

								<input disabled={hasAlreadyBeenOrdered} type="number" value={theAmount} readOnly />

								<ButtonOfTheAmount _id={_id} buttonAction="addOne" hasAlreadyBeenOrdered={hasAlreadyBeenOrdered} />
							</span>
						</div>
					</div>
				</MenuItemInfo>
				<RenderIf condition={ !isClosedAccount }>
					<RemoveOrderButton
						hasAlreadyBeenOrdered={hasAlreadyBeenOrdered}
						itemId={_id}
					/>
				</RenderIf>
			</MenuItemContainer>
		</div>
	);
}

OrderItem.propTypes = {
	menuname: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	_id: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	hasAlreadyBeenOrdered: PropTypes.bool.isRequired,
	theAmount: PropTypes.number.isRequired,
};
