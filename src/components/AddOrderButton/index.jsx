import { memo, useContext } from 'react';
import PropTypes from 'prop-types';

import { FaCheckCircle, FaPlusCircle } from 'react-icons/fa';

import RenderIf from '../RenderIf';

import AppContext from '../../contexts/AppProvider/context';
import MenuContext from '../../contexts/MenuProvider/context';
import OrdersContext from '../../contexts/OrdersProvider/context';

import whichClassMustHave from '../../utils/whichClassMustHave';

import { addOrder as updateMenuItem } from '../../contexts/MenuProvider/actions';
import { addOrder } from '../../contexts/OrdersProvider/actions';

function AddOrderButton({ hasAlreadyBeenOrdered, itemId }) {
	const { actuallyPage, setOrdersCounter } = useContext(AppContext);

	const { menuDispatch, menu } = useContext(MenuContext);
	const { ordersDispatch } = useContext(OrdersContext);

	const classMustHave = whichClassMustHave(hasAlreadyBeenOrdered, actuallyPage);

	return (
		<button
			className={classMustHave}
			type="button"
			disabled={hasAlreadyBeenOrdered}
			onClick={
				() => {
					updateMenuItem(menuDispatch, itemId, menu);
					addOrder(ordersDispatch, itemId, menu);
					setOrdersCounter((c) => c + 1);
				}
			}
		>
			<RenderIf condition={ !hasAlreadyBeenOrdered }>
				<FaPlusCircle />
			</RenderIf>

			<RenderIf condition={ !!hasAlreadyBeenOrdered }>
				<FaCheckCircle />
			</RenderIf>
		</button>
	);
}

AddOrderButton.propTypes = {
	hasAlreadyBeenOrdered: PropTypes.bool.isRequired,
	itemId: PropTypes.string.isRequired
};

export default memo(AddOrderButton);
