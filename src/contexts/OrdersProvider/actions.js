import * as types from './types';

export const addOrder = (dispatch, itemId, menu) => {
	const order = menu.find(({ _id }) => _id === itemId);
	dispatch({ type: types.ADD_ORDER, payload: { ...order, hasAlreadyBeenOrdered: false } });
};

export const removeOrder = (dispatch, itemId) => {
	dispatch({ type: types.REMOVE_ORDER, payload: { itemId } });
};

export const incrementOrderItem = (dispatch, itemId) => {
	dispatch({ type: types.INCREMENT_ORDER_ITEM, payload: { itemId } });
};

export const decrementOrderItem = (dispatch, itemId) => {
	dispatch({ type: types.DECREMENT_ORDER_ITEM, payload: { itemId } });
};

export const toCloseOrder = (dispatch) => {
	dispatch({ type: types.TO_CLOSE_ORDER });
};
