import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';

import { FaCheckCircle, FaWindowClose, FaPlusCircle } from 'react-icons/fa';

import { Context } from '../../contexts/AppContext';
import { MainContainerContext } from '../../contexts/MainContainerContext';

import whichClassMustHave from '../../utils/whichClassMustHave';

function OrderButton({ hasAlreadyBeenOrdered, itemId }) {
	const iconsArray = {
		wasOrder: <FaCheckCircle />,
		noWasOrder: <FaPlusCircle />,
		deleteOrder: <FaWindowClose />
	};

	const { actuallyPage, ordersDispatch, orders, menuDispatch, menu } = useContext(Context);
	const { type } = useContext(MainContainerContext);

	const classMustHave = whichClassMustHave(hasAlreadyBeenOrdered, actuallyPage);

	return (
		<button
			className={classMustHave}
			type="button"
			disabled={hasAlreadyBeenOrdered}
			onClick={
				() => {
					menuDispatch({ type, payload: { id: itemId } });
					ordersDispatch({ type, payload: { id: itemId, menu, orders } });
				}
			}
		>
			{
				iconsArray[classMustHave]
			}
		</button>
	);
}

OrderButton.propTypes = {
	hasAlreadyBeenOrdered: PropTypes.bool.isRequired,
	itemId: PropTypes.string.isRequired
};

export default memo(OrderButton);
