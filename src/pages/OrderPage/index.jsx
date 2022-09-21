import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import HeadingContainer from '../../components/HeadingContainer';
import OrderItem from '../../components/OrderItem';
import RenderIf from '../../components/RenderIf';

import useMediaQuery from '../../hooks/useMediaQuery';
import { setActuallyPage } from '../../store/reducers/actuallyPageSlice';
import { resetOrdersCounter } from '../../store/reducers/ordersCounterSlice';
import { Container, OrderItemsContainer } from './styles';

export default function OrderPage() {
	const orders = useSelector((state) => state.orders);
	const dispatch = useDispatch();

	const isMobile = useMediaQuery('(max-width: 600px)');

	useEffect(() => {
		dispatch(setActuallyPage('order'));
		dispatch(resetOrdersCounter());
	}, []);

	return (
		<Container>
			<HeadingContainer
				title="seus pedidos"
				isMobile={isMobile}
			/>

			<OrderItemsContainer>
				{
					orders.map((item) => (
						<OrderItem
							key={item['_id']}
							/* eslint-disable react/jsx-props-no-spreading */
							{...item}
						/>
					))
				}
			</OrderItemsContainer>

			<RenderIf condition={!orders.length}>
				<span className="no-orders-icon">
					nenhum pedido
				</span>
			</RenderIf>

			<Outlet />
		</Container>
	);
}
