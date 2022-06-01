import React, { useContext } from 'react';

import HeadingContainer from '../../components/HeadingContainer';
import RenderIf from '../../components/RenderIf';
import MenuContainer from '../../containers/MenuContainer';
import MenuItems from '../../containers/MenuItems';
import AccountButton from '../../components/AccountButton';

import AppContext from '../../AppContext';

import './style.css';

export default function AccountPage() {
	const { actuallyPage, orders, accountValue, toCloseAccount, isClosedAccount, toConfirmPurchase, toCancelPurchase } = useContext(AppContext);

	const dataToBeShown = orders;

	if (!isClosedAccount) {
		window.location.href = '/ecommerce-restaurante/';
	}

	return (
		<div className="AccountPage">
			<RenderIf condition={ isClosedAccount }>
				<MenuContainer>
					<HeadingContainer
						title="conta"
						actuallyPage={actuallyPage}
						accountValue={accountValue}
						toCloseAccount={toCloseAccount}
					/>
					<RenderIf condition={ dataToBeShown.length }>
						<MenuItems
							dataToBeShown={dataToBeShown}
						/>
					</RenderIf>
				</MenuContainer>
				<div className="account-div">
					<p>Total: R$ {accountValue.toFixed(2)}</p>
					<AccountButton buttonClass="confirm-purchase" func={toConfirmPurchase} buttonText="CONFIRMAR COMPRA" />
					<AccountButton buttonClass="cancel-purchase" func={toCancelPurchase} buttonText="CANCELAR" />
				</div>
			</RenderIf>
		</div>
	);
}
