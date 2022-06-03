import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';

import { FaPlus } from 'react-icons/fa';
import RenderIf from '../RenderIf';

import Context from '../../contexts/AppProvider/context';

function ButtonOfTheAmount({ _id, buttonAction, hasAlreadyBeenOrdered }) {
	const { ordersDispatch, orders, menuDispatch, menu } = useContext(Context);

	return (
		<>
			<RenderIf condition={ buttonAction === 'removeOne' }>
				<button
					disabled={hasAlreadyBeenOrdered}
					onClick={
						() => {
							menuDispatch({ type: 'decreaseTheAmount', payload: { id: _id, menu } });
							ordersDispatch({ type: 'decreaseTheAmount', payload: { id: _id, orders } });
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
						menuDispatch({ type: 'increaseTheAmount', payload: { id: _id, menu } });
						ordersDispatch({ type: 'increaseTheAmount', payload: { id: _id, orders } });
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
