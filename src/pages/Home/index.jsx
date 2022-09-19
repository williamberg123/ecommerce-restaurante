import { useContext, useEffect } from 'react';
import { Container } from './styles';

import Title from '../../components/Title';
import { AppContext } from '../../contexts/AppProvider/context';

export default function Home() {
	const { funcSetActuallyPage } = useContext(AppContext);

	useEffect(() => {
		funcSetActuallyPage('home');
	}, []);

	return (
		<Container>
			<Title />
		</Container>
	);
}
