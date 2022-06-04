import * as types from './types';

import loadAllMenu from '../../utils/fetchAllMenuData';
import removeDuplicateItems from '../../utils/removeDuplicateItems';

export const loadMenu = async (dispatch, baseUrl) => {
	const menuAndPrice = removeDuplicateItems(await loadAllMenu(baseUrl));
	dispatch({ type: types.LOAD_MENU, payload: menuAndPrice });
};

export const addOrder = (dispatch, itemId, menu) => {
	const index = menu.findIndex(({ _id }) => _id === itemId);

	const updatedState = [...menu];
	updatedState[index].hasAlreadyBeenOrdered = true;

	dispatch({ type: types.ADD_ORDER, payload: updatedState });
};

export const removeOrder = (dispatch, itemId) => {
	dispatch({ type: types.REMOVE_ORDER, payload: { itemId } });
};

export const incrementTheAmount = (dispatch, itemId) => {
	dispatch({ type: types.INCREMENT_AMOUNT, payload: { itemId } });
};

export const decrementTheAmount = (dispatch, itemId) => {
	dispatch({ type: types.DECREMENT_AMOUNT, payload: { itemId } });
};

export const toCloseMenu = (dispatch) => {
	dispatch({ type: types.TO_CLOSE_MENU });
};
