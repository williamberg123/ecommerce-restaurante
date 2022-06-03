import React, { useContext } from 'react';

import HeadingContainer from '../../components/HeadingContainer';
import RenderIf from '../../components/RenderIf';
import MainContainer from '../../containers/MainContainer';
import MenuItems from '../../containers/MenuItems';
import AccountButton from '../../components/AccountButton';

import Context from '../../contexts/AppProvider/context';

import './style.css';

export default function AccountPage() {
	const { actuallyPage, orders, accountValue, toCloseAccount, isClosedAccount, toConfirmPurchase, toCancelPurchase } = useContext(Context);

	if (!isClosedAccount) {
		window.location.href = '/ecommerce-restaurante/';
	}

	return (
		<div className="AccountPage">
			<RenderIf condition={ isClosedAccount }>
				<MainContainer>
					<HeadingContainer
						title="conta"
						actuallyPage={actuallyPage}
						accountValue={accountValue}
						toCloseAccount={toCloseAccount}
					/>
					<RenderIf condition={ orders.length }>
						<MenuItems
							dataToBeShown={orders}
						/>
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
