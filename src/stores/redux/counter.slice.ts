import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "counter",
	initialState: { count: 0 },
	reducers: {
		inc: (state) => {
			state.count++;
		},
		dec: (state) => {
			state.count--;
		},
	},
});

export const { inc, dec } = slice.actions;
export default slice.reducer;
