import React, { useContext, useMemo } from 'react';

import PropTypes from 'prop-types';

import MenuContainer from '../../containers/MenuContainer';
import HeadingContainer from '../../components/HeadingContainer';
import RenderIf from '../../components/RenderIf';
import MenuItems from '../../containers/MenuItems';

import AppContext from '../../AppContext';
import MenuContainerContext from '../../containers/MenuContainer/MenuContainerContext';

import './style.css';

export default function OrderPage({ funcOrder }) {
	const { actuallyPage, allOrders, accountValue, toCloseAccount } = useContext(AppContext);

	const dataToBeShown = allOrders;

	const memoizedMenuContainerContext = useMemo(() => ({ funcOrder }), [funcOrder]);

	return (
		<div className="OrderPage">
			<MenuContainer>
				<HeadingContainer
					title="seus pedidos"
					actuallyPage={actuallyPage}
					accountValue={accountValue}
					toCloseAccount={toCloseAccount}
				/>
				<RenderIf condition={ dataToBeShown.length }>
					<MenuContainerContext.Provider value={memoizedMenuContainerContext}>
						<MenuItems
							dataToBeShown={dataToBeShown}
						/>
					</MenuContainerContext.Provider>
				</RenderIf>
			</MenuContainer>
		</div>
	);
}

OrderPage.propTypes = {
	funcOrder: PropTypes.func.isRequired
};
