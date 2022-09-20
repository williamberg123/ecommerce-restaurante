import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
	name: 'menu',
	initialState: {
		isLoading: false,
		data: []
	},
	reducers: {
		menuLoading: (state, action) => {
			state.isLoading = action.payload;
		},
		loadMenu: (state, action) => {
			state.data = action.payload;
		},
		addOrder: (state, action) => {
			const { itemId } = action.payload;
			const index = state.data.findIndex(({ _id }) => _id === itemId);

			state.data[index].hasAlreadyBeenOrdered = true;
		},
		removeOrder: (state, action) => {
			const { itemId } = action.payload;
			const index = state.data.findIndex(({ _id }) => _id === itemId);

			state.data[index].hasAlreadyBeenOrdered = false;
		},
		incrementTheAmount: (state, action) => {
			const { itemId } = action.payload;
			const index = state.data.findIndex(({ _id }) => _id === itemId);

			state.data[index].theAmount += 1;
		},
		decrementTheAmount: (state, action) => {
			const { itemId } = action.payload;
			const index = state.data.findIndex(({ _id }) => _id === itemId);

			if (state.data[index].theAmount <= 1) return state;

			state.data[index].theAmount -= 1;
		},
	},
});

export const menuReducer = menuSlice.reducer;
export const { menuLoading, loadMenu, addOrder, removeOrder, incrementTheAmount, decrementTheAmount } = menuSlice.actions;
