import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

import MenuItems from '../MenuItems';

import AppContext from '../../AppContext';
import MenuContainerContext from './MenuContainerContext';

import './style.css';

export default function MenuContainer({ funcOrder, title }) {
	const { actuallyPage, allMenu, allOrders, accountValue } = useContext(AppContext);

	const dataToBeShown = actuallyPage === 'menu'
	? allMenu
	: allOrders;

	const memoizedMenuContainerContext = useMemo(() => ({ funcOrder }), [funcOrder]);

	return (
		<div className="MenuContainer">
			<div className="ContainerHeading">
				<h1>{title}</h1>
				{
					actuallyPage === 'order' && (
						<div className="account-div">
							Valor Total: R$
							{accountValue.toFixed(2)}
						</div>
					)
				}
			</div>
			{
				!!dataToBeShown.length && (
					<MenuContainerContext.Provider value={memoizedMenuContainerContext}>
						<MenuItems
							dataToBeShown={dataToBeShown}
						/>
					</MenuContainerContext.Provider>
				)
			}
		</div>
	);
}

MenuContainer.propTypes = {
	funcOrder: PropTypes.func,
	title: PropTypes.string.isRequired
};
