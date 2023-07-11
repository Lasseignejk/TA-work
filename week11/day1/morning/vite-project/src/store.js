import { configureStore } from "@reduxjs/toolkit";

// reducers go here
import counterReducer from "./reducers/counterSlice";
import loginReducer from "./reducers/loginSlice";
import studentsReducer from "./reducers/studentsSlice";
import cartReducer from "./reducers/cartSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		login: loginReducer,
		students: studentsReducer,
		cart: cartReducer,
	},
});
