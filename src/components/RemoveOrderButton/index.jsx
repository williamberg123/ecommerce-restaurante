import { useDispatch } from 'react-redux';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import { FaWindowClose } from 'react-icons/fa';

import { AppContext } from '../../contexts/AppProvider/context';
import { removeOrder } from '../../state/menu/menuSlice';
import whichClassMustHave from '../../utils/whichClassMustHave';

export default function RemoveOrderButton({ hasAlreadyBeenOrdered, itemId }) {
	const { actuallyPage } = useContext(AppContext);
	const dispatch = useDispatch();

	const classMustHave = whichClassMustHave(hasAlreadyBeenOrdered, actuallyPage);

	return (
		<button
			className={classMustHave}
			type="button"
			onClick={
				() => {
					dispatch(removeOrder({ itemId }));
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
