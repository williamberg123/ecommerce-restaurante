import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';

import { FaPlus } from 'react-icons/fa';
import RenderIf from '../RenderIf';

import AppContext from '../../AppContext';

function ButtonOfTheAmount({ _id, buttonAction, hasAlreadyBeenOrdered }) {
	const { setTheAmount } = useContext(AppContext);

	return (
		<>
			<RenderIf condition={ buttonAction === 'removeOne' }>
				<button disabled={hasAlreadyBeenOrdered} onClick={() => setTheAmount('remove', _id)} type="button">
					-
				</button>
			</RenderIf>
			<RenderIf condition={ buttonAction === 'addOne' }>
				<button disabled={hasAlreadyBeenOrdered} onClick={() => setTheAmount('add', _id)} type="button">
					<FaPlus />
				</button>
			</RenderIf>
		</>
	);
}

ButtonOfTheAmount.propTypes = {
	_id: PropTypes.string.isRequired,
	buttonAction: PropTypes.string.isRequired,
	hasAlreadyBeenOrdered: PropTypes.bool.isRequired
};

export default memo(ButtonOfTheAmount);
