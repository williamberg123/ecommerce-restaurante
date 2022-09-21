import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Title } from './styles';

import { setActuallyPage } from '../../store/reducers/actuallyPageSlice';

export default function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setActuallyPage('home'));
	}, []);

	return (
		<Container>
			<Title>
				<h1>Berg</h1>
				<h2>Bar e Restaurante</h2>
			</Title>
		</Container>
	);
}
