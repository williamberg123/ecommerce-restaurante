import React, { useEffect, useState } from 'react';

import axios from 'axios';
import AppRoutes from './routes';

import './App.css';

export default function App() {
	const [ allMenuData, setAllMenuData ] = useState([]);
	const [ baseUrl ] = useState('https://foodbukka.herokuapp.com/api/v1/menu');

	const loadAllMenuData = async () => {
		const menuData = await axios(baseUrl);
		setAllMenuData(menuData.data.Result);
	};

	useEffect(() => {
		loadAllMenuData();
	}, []);

    return (
		<div className="App">
			<AppRoutes allMenuData={allMenuData} />
		</div>
    );
}
