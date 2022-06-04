import React, { useContext, useEffect, useState } from 'react';

import MainContainer from '../../containers/MainContainer';
import HeadingContainer from '../../components/HeadingContainer';
import RenderIf from '../../components/RenderIf';
import OrderItems from '../../containers/OrdersItems';

import AppContext from '../../contexts/AppProvider/context';
import OrdersContext from '../../contexts/OrdersProvider/context';

import './style.css';
import calcSum from '../../utils/calculateAccount';

export default function OrderPage() {
	const [ accountValue, setValue ] = useState(0);
	const { actuallyPage } = useContext(AppContext);
	const { orders } = useContext(OrdersContext);

	useEffect(() => {
		const newValue = calcSum(orders);
		setValue(newValue);
	}, [orders]);

	return (
		<div className="OrderPage">
			<MainContainer>
				<HeadingContainer
					title="seus pedidos"
					actuallyPage={actuallyPage}
					accountValue={accountValue}
				/>
				<RenderIf condition={ orders.length }>
					<OrderItems />
				</RenderIf>
				<RenderIf condition={ !orders.length }>
					<p>Nenhum pedido</p>
				</RenderIf>
			</MainContainer>
		</div>
	);
}
