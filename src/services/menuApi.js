import axios from 'axios';

export const loadAllMenu = async () => {
	const menuData = await axios.get('https://foodbukka.herokuapp.com/api/v1/menu');
	const { Result } = menuData.data;

	const menuAndPrice = Result.map((item) => {
		const randomIndex = Math.floor(Math.random() * 3);
		const randomPrice = (Math.random() * 60) + 10;

		return {
			...item,
			price: randomPrice.toFixed(2),
			imageUrl: item.images[randomIndex],
			hasAlreadyBeenOrdered: false,
			theAmount: 1
		};
	});

	return menuAndPrice;
};
