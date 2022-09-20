import { configureStore } from '@reduxjs/toolkit';
import { menuReducer } from './menu/menuSlice';
import { ordersReducer } from './orders/ordersSlice';

export const store = configureStore({
	reducer: {
		menu: menuReducer,
		orders: ordersReducer
	}
});
