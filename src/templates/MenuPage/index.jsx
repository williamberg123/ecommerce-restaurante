import React from 'react';

import PropTypes from 'prop-types';

import Header from '../../components/Header';
import ShadowEffect from '../../components/ShadowEffect';
import MenuContainer from '../../containers/MenuContainer';

import './style.css';

export default function MenuPage({ funcOrder }) {
	return (
		<div className="MenuPage">
			<ShadowEffect />
			<Header />
			<MenuContainer
				funcOrder={funcOrder}
				title="cardápio disponível"
			/>
		</div>
	);
}

MenuPage.propTypes = {
	funcOrder: PropTypes.func.isRequired
};
