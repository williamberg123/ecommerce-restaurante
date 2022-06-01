import React, { memo, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { FaCheckCircle, FaWindowClose, FaPlusCircle } from 'react-icons/fa';

import AppContext from '../../AppContext';
import MenuContainerContext from '../../containers/MenuContainer/MenuContainerContext';

import whichClassMustHave from '../../utils/whichClassMustHave';

function OrderButton({ hasAlreadyBeenOrdered, itemId }) {
	const [ iconsArray ] = useState({
		wasOrder: <FaCheckCircle />,
		noWasOrder: <FaPlusCircle />,
		deleteOrder: <FaWindowClose />
	});

	const { actuallyPage, ordersDispatch, orders, menuDispatch, menu } = useContext(AppContext);
	const { type } = useContext(MenuContainerContext);

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
