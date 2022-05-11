import React from 'react';

import PropTypes from 'prop-types';

import Header from '../../components/Header';
import ShadowEffect from '../../components/ShadowEffect';
import MenuContainer from '../../containers/MenuContainer';

import './style.css';

export default function OrderPage({ funcOrder }) {
	return (
		<div className="OrderPage">
			<Header />
			<ShadowEffect />
			<MenuContainer
				title="seus pedidos"
				whichIconMustHave="close"
				funcOrder={funcOrder}
			/>
		</div>
	);
}

OrderPage.propTypes = {
	funcOrder: PropTypes.func.isRequired
};
