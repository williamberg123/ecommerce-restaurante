import axios from 'axios';

const loadAllMenuData = async (baseUrl) => {
	const menuData = await axios(baseUrl);
	const menuResults = menuData.data.Result;

	const menuAndPrice = menuResults.map((item) => {
		const randomIndex = Math.floor(Math.random() * 3);
		const randomPrice = (Math.random() * 60) + 10;

		return {
			...item,
			price: randomPrice.toFixed(2),
			imageUrl: item.images[randomIndex],
			hasAlreadyBeenOrdered: false
		};
	});

	return menuAndPrice;
};

export default loadAllMenuData;
