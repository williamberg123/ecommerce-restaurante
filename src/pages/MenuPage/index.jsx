import { useContext } from 'react';

import Loader from 'react-js-loader';

import HeadingContainer from '../../components/HeadingContainer';
import MenuItem from '../../components/MenuItem';
import RenderIf from '../../components/RenderIf';

import MenuContext from '../../contexts/MenuProvider/context';

import { Container, MenuItemsContainer } from './styles';

export default function MenuPage() {
	const { menu } = useContext(MenuContext);

	return (
		<Container>
			<HeadingContainer
				title="cardápio disponível"
			/>
			<RenderIf condition={ !menu.length }>
				<Loader type="spinner-default" bgColor="#FFFFFF" size={70} />
			</RenderIf>
			<RenderIf condition={ !!menu.length }>
				<MenuItemsContainer>
					{
						menu.map((item) => (
							<MenuItem
								key={item['_id']}
								/* eslint-disable react/jsx-props-no-spreading */
								{...item}
							/>
						))
					}
				</MenuItemsContainer>
			</RenderIf>
		</Container>
	);
}
