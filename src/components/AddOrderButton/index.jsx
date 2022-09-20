import { useContext } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FaCheckCircle, FaPlusCircle } from 'react-icons/fa';

import { AppContext } from '../../contexts/AppProvider/context';
import RenderIf from '../RenderIf';
import whichClassMustHave from '../../utils/whichClassMustHave';
import { addOrder } from '../../state/menu/menuSlice';

export default function AddOrderButton({ hasAlreadyBeenOrdered, itemId }) {
	const { actuallyPage, setOrdersCounter } = useContext(AppContext);
	const dispatch = useDispatch();

	const classMustHave = whichClassMustHave(hasAlreadyBeenOrdered, actuallyPage);

	return (
		<button
			className={classMustHave}
			type="button"
			disabled={hasAlreadyBeenOrdered}
			onClick={
				() => {
					dispatch(addOrder({ itemId }));
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
