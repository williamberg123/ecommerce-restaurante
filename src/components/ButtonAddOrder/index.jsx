import React from 'react';

import { FaCheckCircle, FaWindowClose } from 'react-icons/fa';

import PropTypes from 'prop-types';

export default function ButtonAddOrder({ hasAlreadyBeenOrdered, funcOrder, itemId, whichIconMustHave }) {
	const whichClassMustHave = () => {
		let classMustHave = '';

		if (hasAlreadyBeenOrdered && whichIconMustHave === 'check') {
			classMustHave = 'wasOrder';
		} else if (whichIconMustHave === 'close') {
			classMustHave = 'deleteOrder';
		} else {
			classMustHave = 'noWasOrder';
		}

		return classMustHave;
	};

	const classMustHave = whichClassMustHave();

	return (
		<button
			className={classMustHave}
			type="button"
			disabled={hasAlreadyBeenOrdered}
			onClick={(e) => funcOrder(e, itemId)}
		>
			{
				(hasAlreadyBeenOrdered && whichIconMustHave === 'check') && (
					<FaCheckCircle />
				)
			}
			{
				(!hasAlreadyBeenOrdered && whichIconMustHave === 'check') && (
					'adicionar aos pedidos'
				)
			}
			{
			whichIconMustHave === 'close' && (
				<FaWindowClose />
			)
			}
		</button>
	);
}

ButtonAddOrder.propTypes = {
	hasAlreadyBeenOrdered: PropTypes.bool.isRequired,
	funcOrder: PropTypes.func.isRequired,
	itemId: PropTypes.string.isRequired,
	whichIconMustHave: PropTypes.string.isRequired
};
