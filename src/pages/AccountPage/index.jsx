import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import HeadingContainer from '../../components/HeadingContainer';
import RenderIf from '../../components/RenderIf';
import MainContainer from '../../containers/MainContainer';
import AccountButton from '../../components/AccountButton';
import OrdersItems from '../../containers/OrdersItems';

import { AppContext } from '../../contexts/AppProvider/context';
import OrdersContext from '../../contexts/OrdersProvider/context';

import calcSum from '../../utils/calculateAccount';

import './style.css';

export default function AccountPage() {
	const { isClosedAccount, toConfirmPurchase, toCancelPurchase } = useContext(AppContext);
	const { orders } = useContext(OrdersContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!isClosedAccount) {
			navigate('/ecommerce-restaurante/');
		}
	}, [navigate]);

	const accountValue = calcSum(orders);

	return (
		<div className="AccountPage">
			<RenderIf condition={isClosedAccount}>
				<MainContainer>
					<HeadingContainer
						title="conta"
						accountValue={accountValue}
					/>
					<RenderIf condition={orders.length}>
						<OrdersItems />
					</RenderIf>
				</MainContainer>
				<div className="account-div">
					<p>Total: R$ {accountValue.toFixed(2)}</p>
					<AccountButton buttonClass="confirm-purchase" func={toConfirmPurchase} buttonText="CONFIRMAR COMPRA" />
					<AccountButton buttonClass="cancel-purchase" func={toCancelPurchase} buttonText="CANCELAR" />
				</div>
			</RenderIf>
		</div>
	);
}
