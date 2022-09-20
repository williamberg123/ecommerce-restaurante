import { loadAllMenu } from '../../services/menuApi';
import removeDuplicateItems from '../../utils/removeDuplicateItems';
import * as types from './types';

const buildActions = (dispatch) => {
	const loadMenuFn = async () => {
		const menuAndPrice = removeDuplicateItems(await loadAllMenu());
		dispatch({ type: types.LOAD_MENU, payload: menuAndPrice });
	};

	return {
		loadMenu: () => loadMenuFn(),
		addOrder: (itemId) => dispatch({ type: types.ADD_ORDER, payload: { itemId } }),
		removeOrder: (itemId) => dispatch({ type: types.REMOVE_ORDER, payload: { itemId } }),
		incrementTheAmount: (itemId) => dispatch({ type: types.INCREMENT_AMOUNT, payload: { itemId } }),
		decrementTheAmount: (itemId) => dispatch({ type: types.DECREMENT_AMOUNT, payload: { itemId } }),
		toCloseMenu: () => dispatch({ type: types.TO_CLOSE_MENU })
	};
};

export default buildActions;
