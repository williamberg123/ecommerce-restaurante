import { useContext, useEffect } from 'react';

import { MdRestaurantMenu } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import HeadingContainer from '../../components/HeadingContainer';
import OrderItem from '../../components/OrderItem';
import RenderIf from '../../components/RenderIf';
import { AppContext } from '../../contexts/AppProvider/context';

import useMediaQuery from '../../hooks/useMediaQuery';
import { Container, OrderItemsContainer } from './styles';

export default function OrderPage() {
	const { funcSetActuallyPage } = useContext(AppContext);

	const orders = useSelector((state) => state.orders);

	const isMobile = useMediaQuery('(max-width: 600px)');

	useEffect(() => {
		funcSetActuallyPage('order');
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
					<MdRestaurantMenu />
					nenhum pedido
				</span>
			</RenderIf>

			<Outlet />
		</Container>
	);
}
