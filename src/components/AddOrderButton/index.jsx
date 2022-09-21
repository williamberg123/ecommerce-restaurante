import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FaCheckCircle, FaPlusCircle } from 'react-icons/fa';

import RenderIf from '../RenderIf';
import { addOrder } from '../../state/reducers/menuSlice';
import { addOne } from '../../state/reducers/ordersCounterSlice';
import { Button } from './styles';

export default function AddOrderButton({ hasAlreadyBeenOrdered, itemId }) {
	const dispatch = useDispatch();

	return (
		<Button
			type="button"
			disabled={hasAlreadyBeenOrdered}
			onClick={
				() => {
					dispatch(addOrder({ itemId }));
					dispatch(addOne());
				}
			}
		>
			<RenderIf condition={!hasAlreadyBeenOrdered}>
				<FaPlusCircle />
			</RenderIf>

			<RenderIf condition={!!hasAlreadyBeenOrdered}>
				<FaCheckCircle />
			</RenderIf>
		</Button>
	);
}

AddOrderButton.propTypes = {
	hasAlreadyBeenOrdered: PropTypes.bool.isRequired,
	itemId: PropTypes.string.isRequired
};
