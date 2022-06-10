import * as types from './types';

// eslint-disable-next-line
const reducer = (state, action) => {
	switch (action.type) {
		case types.LOAD_MENU: {
			return [...action.payload];
		}

		case types.ADD_ORDER: {
			const { itemId } = action.payload;
			const index = state.findIndex(({ _id }) => _id === itemId);

			const updatedState = [...state];
			updatedState[index].hasAlreadyBeenOrdered = true;

			return [...updatedState];
		}

		case types.REMOVE_ORDER: {
			const { itemId } = action.payload;
			const index = state.findIndex(({ _id }) => _id === itemId);

			const updatedState = [...state];
			updatedState[index].hasAlreadyBeenOrdered = false;

			return [...updatedState];
		}

		case types.INCREMENT_AMOUNT: {
			const { itemId } = action.payload;
			const index = state.findIndex(({ _id }) => _id === itemId);

			const updatedState = [...state];
			updatedState[index].theAmount += 1;

			return [...updatedState];
		}

		case types.DECREMENT_AMOUNT: {
			const { itemId } = action.payload;
			const index = state.findIndex(({ _id }) => _id === itemId);

			const updatedState = [...state];

			if (updatedState[index].theAmount <= 1) return [...state];

			updatedState[index].theAmount -= 1;

			return [...updatedState];
		}

		case types.TO_CLOSE_MENU: {
			const closedMenu = state.map((menuItem) => ({ ...menuItem, hasAlreadyBeenOrdered: true }));

			return [ ...closedMenu ];
		}
	}

	return [...state];
};

export default reducer;
