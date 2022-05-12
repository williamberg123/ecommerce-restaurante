import React from 'react';

import PropTypes from 'prop-types';

import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import ShadowEffect from '../../components/ShadowEffect';
import MenuContainer from '../../containers/MenuContainer';

import './style.css';

export default function OrderPage({ funcOrder }) {
	return (
		<div className="OrderPage">
			<Header>
				<NavBar />
			</Header>
			<ShadowEffect />
			<MenuContainer
				title="seus pedidos"
				funcOrder={funcOrder}
			/>
		</div>
	);
}

OrderPage.propTypes = {
	funcOrder: PropTypes.func.isRequired
};
