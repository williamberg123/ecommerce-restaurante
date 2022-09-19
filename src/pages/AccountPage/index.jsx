import { useContext } from 'react';

import HeadingContainer from '../../components/HeadingContainer';
import RenderIf from '../../components/RenderIf';
import AccountButton from '../../components/AccountButton';

import { AppContext } from '../../contexts/AppProvider/context';
import OrdersContext from '../../contexts/OrdersProvider/context';

import calcSum from '../../utils/calculateAccount';

import { AccountDiv, Container, OrderItemsContainer } from './styles';
import OrderItem from '../../components/OrderItem';

export default function AccountPage() {
	const { toConfirmPurchase, toCancelPurchase } = useContext(AppContext);
	const { orders } = useContext(OrdersContext);

	const accountValue = calcSum(orders);

	return (
		<Container>
			<HeadingContainer
				title="conta"
			/>
			<RenderIf condition={orders.length}>
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
			</RenderIf>

			<AccountDiv>
				<p>Total: R$ {accountValue.toFixed(2)}</p>
				<AccountButton buttonClass="confirm-purchase" func={toConfirmPurchase}>
					CONFIRMAR COMPRA
				</AccountButton>
				<AccountButton buttonClass="cancel-purchase" func={toCancelPurchase}>
					CANCELAR
				</AccountButton>
			</AccountDiv>
		</Container>
	);
}
