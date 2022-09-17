import React, { useContext } from 'react';
import OrderItem from '../../components/OrderItem';
import OrdersContext from '../../contexts/OrdersProvider/context';
import { AppContext } from '../../contexts/AppProvider/context';

import './style.css';

export default function OrdersItems() {
	const { orders } = useContext(OrdersContext);
	const { isClosedAccount } = useContext(AppContext);

	const menuChildren = orders.map((orderItem) => (
		<OrderItem
			key={orderItem['_id']}
			/* eslint-disable react/jsx-props-no-spreading */
			{...orderItem}
			isClosedAccount={isClosedAccount}
		/>
	));

	return (
		<div className="MenuContainer-items">
			{menuChildren}
		</div>
	);
}
