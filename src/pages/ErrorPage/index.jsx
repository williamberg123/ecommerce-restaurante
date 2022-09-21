import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActuallyPage } from '../../state/reducers/actuallyPageSlice';

import { Container } from './styles';

export default function ErrorPage() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setActuallyPage('error'));
	}, []);

	return (
		<Container>
			<h1>Error: page not found</h1>
		</Container>
	);
}
