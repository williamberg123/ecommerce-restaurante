import { useContext, useEffect } from 'react';
import { AppContext } from '../../contexts/AppProvider/context';

import { Container } from './styles';

export default function ErrorPage() {
	const { funcSetActuallyPage } = useContext(AppContext);

	useEffect(() => {
		funcSetActuallyPage('error');
	}, []);

	return (
		<Container>
			<h1>Error: page not found</h1>
		</Container>
	);
}
