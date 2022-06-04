import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';

import { FaPlus } from 'react-icons/fa';
import RenderIf from '../RenderIf';

import MenuContext from '../../contexts/MenuProvider/context';
import OrdersContext from '../../contexts/OrdersProvider/context';

import {
	incrementTheAmount as incrementTheAmountMenu,
	decrementTheAmount as decrementTheAmountMenu
} from '../../contexts/MenuProvider/actions';

import { incrementOrderItem, decrementOrderItem } from '../../contexts/OrdersProvider/actions';

function ButtonOfTheAmount({ _id, buttonAction, hasAlreadyBeenOrdered }) {
	const { menuDispatch } = useContext(MenuContext);
	const { ordersDispatch } = useContext(OrdersContext);

	return (
		<>
			<RenderIf condition={ buttonAction === 'removeOne' }>
				<button
					disabled={hasAlreadyBeenOrdered}
					onClick={
						() => {
							decrementTheAmountMenu(menuDispatch, _id);
							decrementOrderItem(ordersDispatch, _id);
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
						incrementTheAmountMenu(menuDispatch, _id);
						incrementOrderItem(ordersDispatch, _id);
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

export default memo(ButtonOfTheAmount);
