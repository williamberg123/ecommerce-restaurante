import React, { useContext, useMemo } from 'react';

import Loader from 'react-js-loader';

import MainContainer from '../../containers/MainContainer';
import HeadingContainer from '../../components/HeadingContainer';
import MenuItems from '../../containers/MenuItems';
import RenderIf from '../../components/RenderIf';

import { Context } from '../../contexts/AppContext';
import ContainerContext from '../../contexts/MainContainerContext';

import './style.css';

export default function MenuPage() {
	const { actuallyPage, accountValue, menu } = useContext(Context);

	const type = 'add';

	const memoizedMenuContainerContext = useMemo(() => ({ type }), []);

	return (
		<div className="MenuPage">
			<MainContainer>
				<HeadingContainer
					title="cardápio disponível"
					actuallyPage={actuallyPage}
					accountValue={accountValue}
				/>
				<RenderIf condition={ !menu.length }>
					<Loader type="spinner-default" bgColor="#FFFFFF" size={70} />
				</RenderIf>
				<RenderIf condition={ menu.length }>
					<ContainerContext value={memoizedMenuContainerContext}>
						<MenuItems
							dataToBeShown={menu}
						/>
					</ContainerContext>
				</RenderIf>
			</MainContainer>
		</div>
	);
}
