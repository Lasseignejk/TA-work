import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

import counterReducer from "./reducers/counterSlice";
import pokeReducer from "./reducers/pokeSlice";
import productsReducer from "./reducers/productsSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		poke: pokeReducer,
		products: productsReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
