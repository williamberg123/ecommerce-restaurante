import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import ButtonOrder from '../AddOrderButton';
import ButtonOfTheAmount from '../AmountButton';
import RenderIf from '../RenderIf';

import { Container, MenuItemConfig, MenuItemContainer } from './styles';

export default function MenuItem(props) {
	const { menuname, description, _id, price, imageUrl, hasAlreadyBeenOrdered, theAmount } = props;
	const { isClosedAccount } = useSelector((state) => state);

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
								<ButtonOfTheAmount _id={_id} buttonAction="removeOne" isDisabled={hasAlreadyBeenOrdered} />

								<input disabled={hasAlreadyBeenOrdered || isClosedAccount} type="number" value={theAmount} readOnly />

								<ButtonOfTheAmount _id={_id} buttonAction="addOne" isDisabled={hasAlreadyBeenOrdered} />
							</MenuItemConfig>
						</MenuItemConfig>
					</div>
				</div>

				<RenderIf condition={ !isClosedAccount }>
					<ButtonOrder
						hasAlreadyBeenOrdered={hasAlreadyBeenOrdered}
						itemId={_id}
					/>
				</RenderIf>
			</MenuItemContainer>
		</Container>
	);
}

MenuItem.propTypes = {
	menuname: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	_id: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	hasAlreadyBeenOrdered: PropTypes.bool.isRequired,
	theAmount: PropTypes.number.isRequired,
};
