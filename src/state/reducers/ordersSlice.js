import { createSlice } from '@reduxjs/toolkit';

const ordersSlice = createSlice({
	name: 'orders',
	initialState: [],
	reducers: {
		getOrders: (state, action) => {
			const { menu } = action.payload;
			const orders = menu.filter(({ hasAlreadyBeenOrdered }) => !!hasAlreadyBeenOrdered);
			return orders;
		},
	}
});

export const ordersReducer = ordersSlice.reducer;
export const { getOrders } = ordersSlice.actions;
