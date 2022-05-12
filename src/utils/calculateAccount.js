const calcSum = (allOrders) => {
	const sum = allOrders.reduce((acc, order) => {
		acc += Number(order.price);
		return acc;
	}, 0);

	return sum;
};

export default calcSum;
