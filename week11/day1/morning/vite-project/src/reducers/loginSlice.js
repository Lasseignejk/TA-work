import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
	name: "login",
	initialState: false,
	reducers: {
		loginUser: (state) => true,
        logoutUser: (state) => false,
	},
});

export const { loginUser, logoutUser } = loginSlice.actions;
export default loginSlice.reducer;
