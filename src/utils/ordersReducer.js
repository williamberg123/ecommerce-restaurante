const ordersReducer = (state, action) => {
	switch (action.type) {
		case 'add': {
			const orderToBeAdded = action.payload.menu.find(({ _id }) => _id === action.payload.id);
			return [...state, { ...orderToBeAdded }];
		}

		case 'remove': {
			const copyOfOrders = [...action.payload.orders];
			const indexToRemove = copyOfOrders.findIndex(({ _id }) => _id === action.payload.id);

			copyOfOrders.splice(indexToRemove, 1);
			return [...copyOfOrders];
		}

		case 'increaseTheAmount': {
			const { orders } = action.payload;
			const copyOfOrders = [...orders];

			const indexToIncrease = copyOfOrders.findIndex(({ _id }) => _id === action.payload.id);

			if (!copyOfOrders.length || indexToIncrease === -1) return [...orders];

			copyOfOrders[indexToIncrease].theAmount += 1;
			return [...copyOfOrders];
		}

		case 'decreaseTheAmount': {
			const { orders } = action.payload;
			const copyOfOrders = [...orders];

			const indexToDecrease = copyOfOrders.findIndex(({ _id }) => _id === action.payload.id);
			if (!copyOfOrders.length || indexToDecrease === -1) return [...orders];

			copyOfOrders[indexToDecrease].theAmount = copyOfOrders[indexToDecrease].theAmount <= 1
			? copyOfOrders[indexToDecrease].theAmount : copyOfOrders[indexToDecrease].theAmount - 1;

			return [...copyOfOrders];
		}

		case 'toCloseAccount': {
			const { orders } = action.payload;
			const closedOrders = orders.map((menuItem) => ({ ...menuItem, hasAlreadyBeenOrdered: true }));

			return [...closedOrders];
		}

		case 'toOpenMenu': {
			const { orders } = action.payload;
			const openedOrders = orders.map((order) => ({ ...order, hasAlreadyBeenOrdered: false }));

			return [...openedOrders];
		}

		default:
			break;
	}

	return [...state];
};

export default ordersReducer;
