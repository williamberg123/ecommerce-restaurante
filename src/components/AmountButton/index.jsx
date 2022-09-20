import { useContext } from 'react';
import PropTypes from 'prop-types';

import { FaPlus } from 'react-icons/fa';
import RenderIf from '../RenderIf';

import MenuContext from '../../contexts/MenuProvider/context';
import OrdersContext from '../../contexts/OrdersProvider/context';

export default function ButtonOfTheAmount({ _id, buttonAction, hasAlreadyBeenOrdered }) {
	const { menuActions } = useContext(MenuContext);
	const { orderActions } = useContext(OrdersContext);

	return (
		<>
			<RenderIf condition={ buttonAction === 'removeOne' }>
				<button
					disabled={hasAlreadyBeenOrdered}
					onClick={
						() => {
							menuActions.decrementTheAmount(_id);
							orderActions.decrementOrderItem(_id);
						}
					}
					type="button"
				>
					-
				</button>
			</RenderIf>

			<RenderIf condition={ buttonAction === 'addOne' }>
				<button
					disabled={hasAlreadyBeenOrdered}
					onClick={() => {
						menuActions.incrementTheAmount(_id);
						orderActions.incrementOrderItem(_id);
					}}
					type="button"
				>
					<FaPlus />
				</button>
			</RenderIf>
		</>
	);
}

ButtonOfTheAmount.propTypes = {
	_id: PropTypes.string.isRequired,
	buttonAction: PropTypes.string.isRequired,
	hasAlreadyBeenOrdered: PropTypes.bool.isRequired
};
