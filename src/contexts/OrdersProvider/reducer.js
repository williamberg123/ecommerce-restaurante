import * as types from './types';

const reducer = (state, action) => {
	switch (action.type) {
		case types.ADD_ORDER: {
			const { itemId, menu } = action.payload;
			const order = menu.find(({ _id }) => _id === itemId);

			return [...state, { ...order, hasAlreadyBeenOrdered: false }];
		}

		case types.REMOVE_ORDER: {
			const { itemId } = action.payload;
			const orderIndex = state.findIndex(({ _id }) => _id === itemId);

			const updatedState = [...state];
			updatedState.splice(orderIndex, 1);

			return [...updatedState];
		}

		case types.INCREMENT_ORDER_ITEM: {
			const { itemId } = action.payload;
			const index = state.findIndex(({ _id }) => _id === itemId);

			if (index === -1) return [...state];

			const updatedState = [...state];
			updatedState[index].theAmount += 1;

			return [...updatedState];
		}

		case types.DECREMENT_ORDER_ITEM: {
			const { itemId } = action.payload;
			const index = state.findIndex(({ _id }) => _id === itemId);

			if (index === -1) return [...state];

			const updatedState = [...state];

			if (updatedState[index].theAmount <= 1) return [...state];

			updatedState[index].theAmount -= 1;

			return [...updatedState];
		}

		case types.TO_CLOSE_ORDER: {
			const closedOrders = state.map((order) => ({ ...order, hasAlreadyBeenOrdered: true }));

			return [ ...closedOrders ];
		}
	}

	return [...state];
};

export default reducer;
