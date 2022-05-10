import React, { useState, useEffect } from 'react';

import AppRoutes from './routes';

import loadAllMenuData from './utils/fetchAllMenuData';

import './App.css';

export default function App() {
	const [ actuallyPage, setActuallyPage ] = useState('home');
	const [ allMenuData, setAllMenuData ] = useState([]);
	const [ allOrders, setAllOrders ] = useState([]);
	const [ baseUrl ] = useState('https://foodbukka.herokuapp.com/api/v1/menu');

	const funcSetActuallyPage = (page) => {
		setActuallyPage(page);
	};

	const updateAllMenuData = (item, itemIndex) => {
		const copyOfAllMenuData = [...allMenuData];
		item.hasAlreadyBeenOrdered = !item.hasAlreadyBeenOrdered;

		copyOfAllMenuData[itemIndex] = item;
		setAllMenuData(copyOfAllMenuData);
	};

	const addNewOrder = (item) => {
		const copyOfOrders = [ ...allOrders ];
		const order = { ...item };

		order.hasAlreadyBeenOrdered = false;
		copyOfOrders.push(order);

		setAllOrders(copyOfOrders);
	};

	const removeOneOrder = (itemIndexInOrders) => {
		const copyOfOrders = [ ...allOrders ];
		copyOfOrders.splice(itemIndexInOrders, 1);

		setAllOrders(copyOfOrders);
	};

	const addOrder = (e, menuItemId) => {
		const copyOfAllMenuData = [...allMenuData];

		const itemIndex = copyOfAllMenuData.findIndex((item) => item['_id'] === menuItemId);
		const item = copyOfAllMenuData.find((item) => item['_id'] === menuItemId);

		addNewOrder(item);
		updateAllMenuData(item, itemIndex, copyOfAllMenuData);
	};

	const removeOrder = (e, menuItemId) => {
		const copyOfAllMenuData = [...allMenuData];
		const copyOfAllOrders = [...allOrders];

		const itemIndexInMenu = copyOfAllMenuData.findIndex((item) => item['_id'] === menuItemId);
		const itemIndexInOrders = copyOfAllOrders.findIndex((item) => item['_id'] === menuItemId);

		const item = copyOfAllMenuData.find((item) => item['_id'] === menuItemId);

		removeOneOrder(itemIndexInOrders);
		updateAllMenuData(item, itemIndexInMenu, copyOfAllMenuData);
	};

	const loadMenuAndPrice = async () => {
		const menuAndPrice = await loadAllMenuData(baseUrl);
		setAllMenuData(menuAndPrice);
	};

	useEffect(() => {
		loadMenuAndPrice();
	}, []);

    return (
		<div className="App">
			<AppRoutes
				allMenuData={allMenuData}
				allOrders={allOrders}
				actuallyPage={actuallyPage}
				funcSetActuallyPage={funcSetActuallyPage}
				funcAddOrder={addOrder}
				funcRemoveOrder={removeOrder}
			/>
		</div>
    );
}
