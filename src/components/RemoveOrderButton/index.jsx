import { memo, useContext } from 'react';
import PropTypes from 'prop-types';

import { FaWindowClose } from 'react-icons/fa';

import Context from '../../contexts/AppProvider/context';

import whichClassMustHave from '../../utils/whichClassMustHave';
import MenuContext from '../../contexts/MenuProvider/context';
import OrdersContext from '../../contexts/OrdersProvider/context';

import { removeOrder } from '../../contexts/OrdersProvider/actions';
import { removeOrder as updateMenuItem } from '../../contexts/MenuProvider/actions';

function RemoveOrderButton({ hasAlreadyBeenOrdered, itemId }) {
	const { actuallyPage } = useContext(Context);

	const { menuDispatch } = useContext(MenuContext);
	const { ordersDispatch } = useContext(OrdersContext);

	const classMustHave = whichClassMustHave(hasAlreadyBeenOrdered, actuallyPage);

	return (
		<button
			className={classMustHave}
			type="button"
			disabled={hasAlreadyBeenOrdered}
			onClick={
				() => {
					removeOrder(ordersDispatch, itemId);
					updateMenuItem(menuDispatch, itemId);
				}
			}
		>
			<FaWindowClose />
		</button>
	);
}

RemoveOrderButton.propTypes = {
	hasAlreadyBeenOrdered: PropTypes.bool.isRequired,
	itemId: PropTypes.string.isRequired
};

export default memo(RemoveOrderButton);
