import React from 'react';

import PropTypes from 'prop-types';

import Header from '../../components/Header';
import ShadowEffect from '../../components/ShadowEffect';

import './style.css';

export default function OrderPage({ actuallyLink, funcSetActuallyLink }) {
	return (
		<div className="OrderPage">
			<Header actuallyLink={actuallyLink} funcSetActuallyLink={funcSetActuallyLink} />
			<ShadowEffect />
		</div>
	);
}

OrderPage.propTypes = {
	actuallyLink: PropTypes.string.isRequired,
	funcSetActuallyLink: PropTypes.func.isRequired
};
