import { useContext } from 'react';
import PropTypes from 'prop-types';

import { FaCheckCircle, FaPlusCircle } from 'react-icons/fa';

import RenderIf from '../RenderIf';

import { AppContext } from '../../contexts/AppProvider/context';
import MenuContext from '../../contexts/MenuProvider/context';
import OrdersContext from '../../contexts/OrdersProvider/context';

import whichClassMustHave from '../../utils/whichClassMustHave';

export default function AddOrderButton({ hasAlreadyBeenOrdered, itemId }) {
	const { actuallyPage, setOrdersCounter } = useContext(AppContext);

	const { menuActions, menu } = useContext(MenuContext);
	const { orderActions } = useContext(OrdersContext);

	const classMustHave = whichClassMustHave(hasAlreadyBeenOrdered, actuallyPage);

	return (
		<button
			className={classMustHave}
			type="button"
			disabled={hasAlreadyBeenOrdered}
			onClick={
				() => {
					menuActions.addOrder(itemId);
					orderActions.addOrder(itemId, menu);
					setOrdersCounter((c) => c + 1);
				}
			}
		>
			<RenderIf condition={!hasAlreadyBeenOrdered}>
				<FaPlusCircle />
			</RenderIf>

			<RenderIf condition={!!hasAlreadyBeenOrdered}>
				<FaCheckCircle />
			</RenderIf>
		</button>
	);
}

AddOrderButton.propTypes = {
	hasAlreadyBeenOrdered: PropTypes.bool.isRequired,
	itemId: PropTypes.string.isRequired
};
