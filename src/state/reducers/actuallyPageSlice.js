import { createSlice } from '@reduxjs/toolkit';

const actuallyPageSlice = createSlice({
	name: 'page',
	initialState: 'home',
	reducers: {
		setActuallyPage: (state, action) => action.payload
	},
});

export const pageReducer = actuallyPageSlice.reducer;
export const { setActuallyPage } = actuallyPageSlice.actions;
