import { useContext } from 'react';
import PropTypes from 'prop-types';

import { FaWindowClose } from 'react-icons/fa';

import { AppContext } from '../../contexts/AppProvider/context';
import MenuContext from '../../contexts/MenuProvider/context';

import whichClassMustHave from '../../utils/whichClassMustHave';
import OrdersContext from '../../contexts/OrdersProvider/context';

export default function RemoveOrderButton({ hasAlreadyBeenOrdered, itemId }) {
	const { actuallyPage } = useContext(AppContext);

	const { menuActions } = useContext(MenuContext);
	const { orderActions } = useContext(OrdersContext);

	const classMustHave = whichClassMustHave(hasAlreadyBeenOrdered, actuallyPage);

	return (
		<button
			className={classMustHave}
			type="button"
			disabled={hasAlreadyBeenOrdered}
			onClick={
				() => {
					orderActions.removeOrder(itemId);
					menuActions.removeOrder(itemId);
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
