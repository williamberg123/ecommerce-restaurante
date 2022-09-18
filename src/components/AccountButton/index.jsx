import React from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

export default function AccountButton({ children, buttonClass, func }) {
	return (
		<NavLink
			to={String(children) === 'CANCELAR' ? '/ecommerce-restaurante/cancel' : '/ecommerce-restaurante/confirm'}
			className={buttonClass}
			onClick={func}
		>
			{children}
		</NavLink>
	);
}

AccountButton.propTypes = {
	children: PropTypes.string,
	buttonClass: PropTypes.string.isRequired,
	func: PropTypes.func.isRequired,
};
