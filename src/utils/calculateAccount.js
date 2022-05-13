const calcSum = (allOrders) => {
	const sum = allOrders.reduce((acc, order) => {
		acc += Number(order.price) * order.theAmount;
		return acc;
	}, 0);

	return sum;
};

export default calcSum;
