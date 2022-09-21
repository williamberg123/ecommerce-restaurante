import { useEffect } from 'react';
import Loader from 'react-js-loader';
import { useDispatch, useSelector } from 'react-redux';

import MenuItem from '../../components/MenuItem';
import RenderIf from '../../components/RenderIf';
import { setActuallyPage } from '../../store/reducers/actuallyPageSlice';

import { Container, MenuItemsContainer } from './styles';

export default function MenuPage() {
	const menu = useSelector((state) => state.menu);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setActuallyPage('menu'));
	}, []);

	return (
		<Container>
			<RenderIf condition={ menu.isLoading }>
				<Loader type="spinner-default" bgColor="#FFFFFF" size={70} />
			</RenderIf>
			<MenuItemsContainer>
				{
					menu.data.map((item) => (
						<MenuItem
							key={item['_id']}
							/* eslint-disable react/jsx-props-no-spreading */
							{...item}
						/>
					))
				}
			</MenuItemsContainer>
		</Container>
	);
}
