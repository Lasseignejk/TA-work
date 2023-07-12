import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

import counterReducer from "./reducers/counterSlice";
import pokeReducer from "./reducers/pokeSlice";
import productsReducer from "./reducers/productsSlice";

import fetchPokemon2 from "./reducers/pokemonCreateAPISlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		poke: pokeReducer,
		products: productsReducer,
		[fetchPokemon2.reducerPath]: fetchPokemon2.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(logger).concat(fetchPokemon2.middleware),
});
