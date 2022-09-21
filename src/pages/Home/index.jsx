import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from './styles';

import Title from '../../components/Title';
import { setActuallyPage } from '../../state/reducers/actuallyPageSlice';

export default function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setActuallyPage('home'));
	}, []);

	return (
		<Container>
			<Title />
		</Container>
	);
}
