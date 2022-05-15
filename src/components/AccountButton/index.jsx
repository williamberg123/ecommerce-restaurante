import React from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

export default function AccountButton({ buttonClass, func, buttonText }) {
	return (
		<NavLink
			to={buttonText === 'CANCELAR' ? '/ecommerce-restaurante/cancel' : '/ecommerce-restaurante/confirm'}
			className={buttonClass}
			onClick={func}
		>
			{buttonText}
		</NavLink>
	);
}

AccountButton.propTypes = {
	buttonClass: PropTypes.string.isRequired,
	func: PropTypes.func.isRequired,
	buttonText: PropTypes.string.isRequired
};
