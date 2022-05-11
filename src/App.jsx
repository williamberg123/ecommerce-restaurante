import React, { useState, useEffect, useCallback, useMemo } from 'react';

import AppRoutes from './routes';

import AppContext from './AppContext';

import loadAllMenu from './utils/fetchAllMenuData';

import './App.css';

export default function App() {
	const [ actuallyPage, setActuallyPage ] = useState('home');
	const [ allMenu, setAllMenu ] = useState([]);
	const [ allOrders, setAllOrders ] = useState([]);
	const [ baseUrl ] = useState('https://foodbukka.herokuapp.com/api/v1/menu');

	const funcSetActuallyPage = useCallback((page) => {
		setActuallyPage(page);
	}, []);

	const updateAllMenu = useCallback((item, itemIndex) => {
		const copyOfAllMenu = [...allMenu];
		item.hasAlreadyBeenOrdered = !item.hasAlreadyBeenOrdered;

		copyOfAllMenu[itemIndex] = item;
		setAllMenu(copyOfAllMenu);
	}, [allMenu]);

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
		const copyOfAllMenu = [...allMenu];

		const itemIndex = copyOfAllMenu.findIndex((item) => item['_id'] === menuItemId);
		const item = copyOfAllMenu.find((item) => item['_id'] === menuItemId);

		addNewOrder(item);
		updateAllMenu(item, itemIndex, copyOfAllMenu);
	};

	const removeOrder = (e, menuItemId) => {
		const copyOfAllMenu = [...allMenu];
		const copyOfAllOrders = [...allOrders];

		const itemIndexInMenu = copyOfAllMenu.findIndex((item) => item['_id'] === menuItemId);
		const itemIndexInOrders = copyOfAllOrders.findIndex((item) => item['_id'] === menuItemId);

		const item = copyOfAllMenu.find((item) => item['_id'] === menuItemId);

		removeOneOrder(itemIndexInOrders);
		updateAllMenu(item, itemIndexInMenu, copyOfAllMenu);
	};

	const removeDuplicateItems = (arrayOfObjects) => {
		const copyOfArray = arrayOfObjects;

		for (const obj of arrayOfObjects) {
			copyOfArray.forEach((item, index) => {
				if (!(index === arrayOfObjects.indexOf(obj))) {
					if (obj.menuname === item.menuname) {
						copyOfArray.splice(index, 1);
					}
				}
			});
		}

		return copyOfArray;
	};

	const loadMenuAndPrice = async () => {
		let menuAndPrice = await loadAllMenu(baseUrl);
		menuAndPrice = removeDuplicateItems(menuAndPrice);
		setAllMenu(menuAndPrice);

		// const outDuplicate = removeDuplicateItems([...menuAndPrice]);
		// for (let obj of outDuplicate) {
		// 	console.log(obj.menuname);
		// }
	};

	useEffect(() => {
		loadMenuAndPrice();
	}, []);

	const memoizedContext = useMemo(
		() => (
			{ actuallyPage, funcSetActuallyPage, allMenu, allOrders, addOrder, removeOrder }
		),
		[actuallyPage, funcSetActuallyPage, allMenu, allOrders, addOrder, removeOrder]
	);

    return (
		<div className="App">
			<AppContext.Provider value={memoizedContext}>
				<AppRoutes />
			</AppContext.Provider>
		</div>
    );
}
