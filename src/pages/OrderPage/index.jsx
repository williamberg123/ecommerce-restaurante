import { useContext } from 'react';

import { MdRestaurantMenu } from 'react-icons/md';
import HeadingContainer from '../../components/HeadingContainer';
import RenderIf from '../../components/RenderIf';
import OrderItems from '../../containers/OrdersItems';

import OrdersContext from '../../contexts/OrdersProvider/context';

import { Container } from './styles';

export default function OrderPage() {
	const { orders } = useContext(OrdersContext);

	return (
		<Container>
			<HeadingContainer
				title="seus pedidos"
			/>

			<RenderIf condition={orders.length}>
				<OrderItems />
			</RenderIf>

			<RenderIf condition={!orders.length}>
				<span className="no-orders-icon">
					<MdRestaurantMenu />
					nenhum pedido
				</span>
			</RenderIf>
		</Container>
	);
}
