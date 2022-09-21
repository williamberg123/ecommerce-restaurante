import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FaWindowClose } from 'react-icons/fa';

import { removeOrder } from '../../store/reducers/menuSlice';
import { Button } from './styles';

export default function RemoveOrderButton({ itemId }) {
	const dispatch = useDispatch();

	return (
		<Button
			type="button"
			onClick={
				() => {
					dispatch(removeOrder({ itemId }));
				}
			}
		>
			<FaWindowClose />
		</Button>
	);
}

RemoveOrderButton.propTypes = {
	itemId: PropTypes.string.isRequired
};
