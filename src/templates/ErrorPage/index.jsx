import React, { useContext, useEffect } from 'react';
import AppContext from '../../contexts/AppProvider';

import './style.css';

export default function ErrorPage() {
	const { funcSetActuallyPage } = useContext(AppContext);

	useEffect(() => {
		funcSetActuallyPage('error');
	}, []);

	return (
		<div className="ErrorPage">
			<h1>Error: page not found</h1>
		</div>
	);
}
