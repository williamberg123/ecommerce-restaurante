import React, { useContext, useMemo } from 'react';

import Loader from 'react-js-loader';

import MenuContainer from '../../containers/MenuContainer';
import HeadingContainer from '../../components/HeadingContainer';
import MenuItems from '../../containers/MenuItems';
import RenderIf from '../../components/RenderIf';

import AppContext from '../../AppContext';
import MenuContainerContext from '../../containers/MenuContainer/MenuContainerContext';

import './style.css';

export default function MenuPage() {
	const { actuallyPage, accountValue, menu } = useContext(AppContext);

	const dataToBeShown = menu;
	const type = 'add';

	const memoizedMenuContainerContext = useMemo(() => ({ type }), []);

	return (
		<div className="MenuPage">
			<MenuContainer>
				<HeadingContainer
					title="cardápio disponível"
					actuallyPage={actuallyPage}
					accountValue={accountValue}
				/>
				<RenderIf condition={ !dataToBeShown.length }>
					<Loader type="spinner-default" bgColor="#FFFFFF" size={70} />
				</RenderIf>
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
