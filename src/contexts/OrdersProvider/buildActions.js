import * as types from './types';

const buildActions = (dispatch) => {
	return {
		addOrder: (itemId, menu) => dispatch({ type: types.ADD_ORDER, payload: { itemId, menu } }),
		removeOrder: (itemId) => dispatch({ type: types.REMOVE_ORDER, payload: { itemId } }),
		incrementOrderItem: (itemId) => dispatch({ type: types.INCREMENT_ORDER_ITEM, payload: { itemId } }),
		decrementOrderItem: (itemId) => dispatch({ type: types.DECREMENT_ORDER_ITEM, payload: { itemId } }),
		toCloseOrder: () => dispatch({ type: types.TO_CLOSE_ORDER })
	};
};

export default buildActions;
