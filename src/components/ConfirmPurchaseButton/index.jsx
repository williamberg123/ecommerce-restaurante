import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

export default function ConfirmPurchaseButton({ buttonClass, func }) {
	return (
		<NavLink
			to="/ecommerce-restaurante/confirm"
			className={buttonClass}
			onClick={func}
		>
			CONFIRMAR COMPRA
		</NavLink>
	);
}

ConfirmPurchaseButton.propTypes = {
	buttonClass: PropTypes.string.isRequired,
	func: PropTypes.func.isRequired,
};
