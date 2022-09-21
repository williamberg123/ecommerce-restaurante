import { createSlice } from '@reduxjs/toolkit';

const ordersCounterSlice = createSlice({
	name: 'ordersCounter',
	initialState: 0,
	reducers: {
		addOne: (state) => state + 1,
		resetOrdersCounter: () => {
			return 0;
		},
	}
});

export const ordersCounterReducer = ordersCounterSlice.reducer;
export const { addOne, resetOrdersCounter } = ordersCounterSlice.actions;
