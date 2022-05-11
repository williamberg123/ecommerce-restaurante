import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { FaCheckCircle, FaWindowClose, FaPlusCircle } from 'react-icons/fa';

import AppContext from '../../AppContext';
import MenuContainerContext from '../../containers/MenuContainer/MenuContainerContext';

import whichClassMustHave from '../../utils/whichClassMustHave';

export default function ButtonAddOrder({ hasAlreadyBeenOrdered, itemId }) {
	const [ iconsArray ] = useState({
		wasOrder: <FaCheckCircle />,
		noWasOrder: <FaPlusCircle />,
		deleteOrder: <FaWindowClose />
	});

	const { actuallyPage } = useContext(AppContext);
	const { funcOrder } = useContext(MenuContainerContext);

	const classMustHave = whichClassMustHave(hasAlreadyBeenOrdered, actuallyPage);

	return (
		<button
			className={classMustHave}
			type="button"
			disabled={hasAlreadyBeenOrdered}
			onClick={(e) => funcOrder(e, itemId)}
		>
			{
				iconsArray[classMustHave]
			}
		</button>
	);
}

ButtonAddOrder.propTypes = {
	hasAlreadyBeenOrdered: PropTypes.bool.isRequired,
	itemId: PropTypes.string.isRequired
};
