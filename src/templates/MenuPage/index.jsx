import React, { useContext, useMemo } from 'react';

import PropTypes from 'prop-types';

import MenuContainer from '../../containers/MenuContainer';
import HeadingContainer from '../../components/HeadingContainer';
import MenuItems from '../../containers/MenuItems';
import RenderIf from '../../components/RenderIf';
import ShadowEffect from '../../components/ShadowEffect';

import AppContext from '../../AppContext';
import MenuContainerContext from '../../containers/MenuContainer/MenuContainerContext';

import './style.css';

export default function MenuPage({ funcOrder }) {
	const { actuallyPage, allMenu, accountValue } = useContext(AppContext);

	const dataToBeShown = allMenu;

	const memoizedMenuContainerContext = useMemo(() => ({ funcOrder }), [funcOrder]);

	return (
		<div className="MenuPage">
			<MenuContainer>
				<HeadingContainer
					title="cardápio disponível"
					actuallyPage={actuallyPage}
					accountValue={accountValue}
				/>
				<RenderIf condition={ dataToBeShown.length }>
					<MenuContainerContext.Provider value={memoizedMenuContainerContext}>
						<MenuItems
							dataToBeShown={dataToBeShown}
						/>
					</MenuContainerContext.Provider>
				</RenderIf>
			</MenuContainer>
			<ShadowEffect />
		</div>
	);
}

MenuPage.propTypes = {
	funcOrder: PropTypes.func.isRequired
};
