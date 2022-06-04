import React, { useContext } from 'react';

import HeadingContainer from '../../components/HeadingContainer';
import RenderIf from '../../components/RenderIf';
import MainContainer from '../../containers/MainContainer';
import AccountButton from '../../components/AccountButton';
import OrdersItems from '../../containers/OrdersItems';

import AppContext from '../../contexts/AppProvider/context';
import OrdersContext from '../../contexts/OrdersProvider/context';

import './style.css';
import calcSum from '../../utils/calculateAccount';

export default function AccountPage() {
	const { actuallyPage, isClosedAccount, toConfirmPurchase, toCancelPurchase } = useContext(AppContext);
	const { orders } = useContext(OrdersContext);

	if (!isClosedAccount) {
		window.location.href = '/ecommerce-restaurante/';
	}

	const accountValue = calcSum(orders);

	return (
		<div className="AccountPage">
			<RenderIf condition={ isClosedAccount }>
				<MainContainer>
					<HeadingContainer
						title="conta"
						actuallyPage={actuallyPage}
						accountValue={accountValue}
					/>
					<RenderIf condition={ orders.length }>
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
