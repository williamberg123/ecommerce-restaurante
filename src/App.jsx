import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AppRoutes from './routes';

import './App.css';

export default function App() {
	const [ actuallyLink, setActuallyLink ] = useState('home');
	const [ allMenuData, setAllMenuData ] = useState([]);
	const [ baseUrl ] = useState('https://foodbukka.herokuapp.com/api/v1/menu');

	const loadAllMenuData = async () => {
		const menuData = await axios(baseUrl);
		const menuResults = menuData.data.Result;
		const menuAndPrice = menuResults.map((item) => {
			const randomIndex = Math.floor(Math.random() * 3);
			const randomPrice = (Math.random() * 60) + 10;

			return { ...item, price: randomPrice.toFixed(2), imageUrl: item.images[randomIndex] };
		});

		setAllMenuData(menuAndPrice);
	};

	useEffect(() => {
		loadAllMenuData();
	}, []);

	const funcSetActuallyLink = (e) => {
		switch (e.target.innerText.toLowerCase()) {
			case 'home':
				setActuallyLink('home');
			break;

			case 'cardápio':
				setActuallyLink('menu');
			break;

			case 'seus pedidos':
				setActuallyLink('order');
			break;

			default:
			break;
		}
	};

    return (
		<div className="App">
			<AppRoutes
				actuallyLink={actuallyLink}
				funcSetActuallyLink={funcSetActuallyLink}
				allMenuData={allMenuData}
			/>
		</div>
    );
}
