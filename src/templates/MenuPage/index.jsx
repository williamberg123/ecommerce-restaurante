import React, { useContext } from 'react';

import Loader from 'react-js-loader';

import MainContainer from '../../containers/MainContainer';
import HeadingContainer from '../../components/HeadingContainer';
import MenuItems from '../../containers/MenuItems';
import RenderIf from '../../components/RenderIf';

import AppContext from '../../contexts/AppProvider/context';

import MenuContext from '../../contexts/MenuProvider/context';

import './style.css';

export default function MenuPage() {
	const { actuallyPage } = useContext(AppContext);
	const { menu } = useContext(MenuContext);

	return (
		<div className="MenuPage">
			<MainContainer>
				<HeadingContainer
					title="cardápio disponível"
					actuallyPage={actuallyPage}
				/>
				<RenderIf condition={ !menu.length }>
					<Loader type="spinner-default" bgColor="#FFFFFF" size={70} />
				</RenderIf>
				<RenderIf condition={ menu.length }>
					<MenuItems />
				</RenderIf>
			</MainContainer>
		</div>
	);
}
