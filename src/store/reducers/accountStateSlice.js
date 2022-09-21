import { createSlice } from '@reduxjs/toolkit';

const accountStateSlice = createSlice({
	name: 'isClosedAccount',
	initialState: false,
	reducers: {
		setIsClosedAccount: (state, action) => action.payload,
	}
});

export const isClosedAccountReducer = accountStateSlice.reducer;
export const { setIsClosedAccount } = accountStateSlice.actions;
