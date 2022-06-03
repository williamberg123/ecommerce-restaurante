// eslint-disable-next-line
const menuReducer = (state, action) => {
	switch (action.type) {
		case 'firstLoad': {
			const { data } = action.payload;
			return [...data];
		}

		case 'add': {
			action.payload.setOrdersCounter((c) => c + 1);
			const updatedState = state.map(
				(menuItem) => menuItem['_id'] === action.payload.id ? { ...menuItem, hasAlreadyBeenOrdered: true } : { ...menuItem }
			);
			return [...updatedState];
		}

		case 'remove': {
			const updatedState = state.map(
				(menuItem) => menuItem['_id'] === action.payload.id ? { ...menuItem, hasAlreadyBeenOrdered: false } : { ...menuItem }
			);
			return [...updatedState];
		}

		case 'increaseTheAmount': {
			const copyOfMenu = [...action.payload.menu];

			const indexToIncrease = copyOfMenu.findIndex(({ _id }) => _id === action.payload.id);

			copyOfMenu[indexToIncrease].theAmount += 1;
			return [...copyOfMenu];
		}

		case 'decreaseTheAmount': {
			const copyOfMenu = [...action.payload.menu];

			const indexToDecrease = copyOfMenu.findIndex(({ _id }) => _id === action.payload.id);

			copyOfMenu[indexToDecrease].theAmount = copyOfMenu[indexToDecrease].theAmount <= 1
			? copyOfMenu[indexToDecrease].theAmount : copyOfMenu[indexToDecrease].theAmount - 1;

			return [...copyOfMenu];
		}

		case 'toCloseAccount': {
			const { menu } = action.payload;
			const closedMenu = menu.map((menuItem) => ({ ...menuItem, hasAlreadyBeenOrdered: true }));

			return [...closedMenu];
		}

		case 'toOpenMenu': {
			const { menu } = action.payload;
			const openedMenu = menu.map((menuItem) => ({ ...menuItem, hasAlreadyBeenOrdered: false }));

			return [...openedMenu];
		}

		default:
			break;
	}
};

export default menuReducer;
