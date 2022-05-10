import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import Header from '../../components/Header';
import ShadowEffect from '../../components/ShadowEffect';
import MenuContainer from '../../containers/MenuContainer';

import './style.css';

export default function OrderPage({ allOrders, actuallyPage, funcSetActuallyPage, funcOrder }) {
	const [ allOrdersData, setAllOrdersData ] = useState([]);

	useEffect(() => {
		setAllOrdersData(allOrders);
	}, [allOrders]);

	return (
		<div className="OrderPage">
			<Header actuallyPage={actuallyPage} funcSetActuallyPage={funcSetActuallyPage} />
			<ShadowEffect />
			<MenuContainer
				allMenuData={allOrdersData}
				title="seus pedidos"
				whichIconMustHave="close"
				funcOrder={funcOrder}
			/>
		</div>
	);
}

OrderPage.propTypes = {
	allOrders: PropTypes.instanceOf(Array).isRequired,
	actuallyPage: PropTypes.string.isRequired,
	funcSetActuallyPage: PropTypes.func.isRequired,
	funcOrder: PropTypes.func.isRequired
};
