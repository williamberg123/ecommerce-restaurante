import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { FaPlus } from 'react-icons/fa';
import RenderIf from '../RenderIf';
import { decrementTheAmount, incrementTheAmount } from '../../state/menu/menuSlice';

export default function ButtonOfTheAmount({ _id, buttonAction, isDisabled }) {
	const dispatch = useDispatch();

	return (
		<>
			<RenderIf condition={buttonAction === 'removeOne'}>
				<button
					disabled={isDisabled}
					onClick={
						() => {
							dispatch(decrementTheAmount({ itemId: _id }));
						}
					}
					type="button"
				>
					-
				</button>
			</RenderIf>

			<RenderIf condition={buttonAction === 'addOne'}>
				<button
					disabled={isDisabled}
					onClick={() => {
						dispatch(incrementTheAmount({ itemId: _id }));
					}}
					type="button"
				>
					<FaPlus />
				</button>
			</RenderIf>
		</>
	);
}

ButtonOfTheAmount.propTypes = {
	_id: PropTypes.string.isRequired,
	buttonAction: PropTypes.string.isRequired,
	isDisabled: PropTypes.bool.isRequired
};
