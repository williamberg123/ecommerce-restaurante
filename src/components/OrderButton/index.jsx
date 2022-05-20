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

	const { actuallyPage, allMenu, allOrders } = useContext(AppContext);
	const { funcOrder } = useContext(MenuContainerContext);

	const copyOfAllMenu = [...allMenu];
	const copyOfAllOrders = [...allOrders];

	const classMustHave = whichClassMustHave(hasAlreadyBeenOrdered, actuallyPage);

	return (
		<button
			className={classMustHave}
			type="button"
			disabled={hasAlreadyBeenOrdered}
			onClick={(e) => funcOrder(e, itemId, copyOfAllMenu, copyOfAllOrders)}
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
