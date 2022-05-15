import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

import HeadingContainer from '../../components/HeadingContainer';
import RenderIf from '../../components/RenderIf';
import MenuContainer from '../../containers/MenuContainer';
import MenuItems from '../../containers/MenuItems';
import AccountButton from '../../components/AccountButton';
import ShadowEffect from '../../components/ShadowEffect';

import AppContext from '../../AppContext';
import MenuContainerContext from '../../containers/MenuContainer/MenuContainerContext';

import './style.css';

export default function AccountPage({ funcOrder }) {
	const { actuallyPage, allOrders, accountValue, toCloseAccount, isClosedAccount, toConfirmPurchase, toCancelPurchase } = useContext(AppContext);

	const dataToBeShown = allOrders;

	const memoizedContext = useMemo(() => ({ funcOrder }), [funcOrder]);

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
						<MenuContainerContext.Provider value={memoizedContext}>
							<MenuItems
								dataToBeShown={dataToBeShown}
							/>
						</MenuContainerContext.Provider>
					</RenderIf>
				</MenuContainer>
				<div className="account-div">
					<p>Total: R$ {accountValue.toFixed(2)}</p>
					<AccountButton buttonClass="confirm-purchase" func={toConfirmPurchase} buttonText="CONFIRMAR COMPRA" />
					<AccountButton buttonClass="cancel-purchase" func={toCancelPurchase} buttonText="CANCELAR" />
				</div>
			</RenderIf>
			<ShadowEffect />
		</div>
	);
}

AccountPage.propTypes = {
	funcOrder: PropTypes.func
};
