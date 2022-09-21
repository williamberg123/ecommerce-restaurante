import { configureStore } from '@reduxjs/toolkit';

import { isClosedAccountReducer } from './reducers/accountStateSlice';
import { pageReducer } from './reducers/actuallyPageSlice';
import { menuReducer } from './reducers/menuSlice';
import { ordersCounterReducer } from './reducers/ordersCounterSlice';
import { ordersReducer } from './reducers/ordersSlice';

export const store = configureStore({
	reducer: {
		menu: menuReducer,
		orders: ordersReducer,
		page: pageReducer,
		ordersCounter: ordersCounterReducer,
		isClosedAccount: isClosedAccountReducer,
	}
});
