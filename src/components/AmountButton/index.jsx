import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { FaPlus } from 'react-icons/fa';
import { decrementTheAmount, incrementTheAmount } from '../../state/reducers/menuSlice';
import { Button } from './styles';

export default function ButtonOfTheAmount({ _id, buttonAction, isDisabled }) {
	const dispatch = useDispatch();

	const onClickFunc = () => {
		if (buttonAction === 'removeOne') {
			dispatch(decrementTheAmount({ itemId: _id }));
		} else {
			dispatch(incrementTheAmount({ itemId: _id }));
		}
	};

	return (
		<Button
			disabled={isDisabled}
			onClick={onClickFunc}
			type="button"
		>
			{
				buttonAction === 'removeOne'
					? '-'
					: <FaPlus />
			}
		</Button>
	);
}

ButtonOfTheAmount.propTypes = {
	_id: PropTypes.string.isRequired,
	buttonAction: PropTypes.string.isRequired,
	isDisabled: PropTypes.bool.isRequired
};
