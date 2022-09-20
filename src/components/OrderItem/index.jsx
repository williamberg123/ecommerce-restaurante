import { useContext } from 'react';
import PropTypes from 'prop-types';

import RemoveOrderButton from '../RemoveOrderButton';
import ButtonOfTheAmount from '../AmountButton';
import RenderIf from '../RenderIf';

import { AppContext } from '../../contexts/AppProvider/context';
import { Container, MenuItemConfig, MenuItemContainer } from '../MenuItem/styles';

export default function OrderItem(props) {
	const { menuname, description, _id, price, imageUrl, hasAlreadyBeenOrdered, theAmount } = props;
	const { isClosedAccount } = useContext(AppContext);

	return (
		<Container>
			<MenuItemContainer>
				<div className="MenuItemInfo">
					<img src={imageUrl} alt={menuname} />
					<div className="MenuItem-text">
						<h2>{menuname.toLowerCase()}</h2>
						<p>{description}</p>
						<MenuItemConfig>
							<span id="item-value" className="item-value">
								R$ {price}
							</span>

							<MenuItemConfig as="span">
								<ButtonOfTheAmount _id={_id} buttonAction="removeOne" hasAlreadyBeenOrdered={hasAlreadyBeenOrdered} />

								<input disabled={hasAlreadyBeenOrdered} type="number" value={theAmount} readOnly />

								<ButtonOfTheAmount _id={_id} buttonAction="addOne" hasAlreadyBeenOrdered={hasAlreadyBeenOrdered} />
							</MenuItemConfig>
						</MenuItemConfig>
					</div>
				</div>
				<RenderIf condition={ !isClosedAccount }>
					<RemoveOrderButton
						hasAlreadyBeenOrdered={hasAlreadyBeenOrdered}
						itemId={_id}
					/>
				</RenderIf>
			</MenuItemContainer>
		</Container>
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
