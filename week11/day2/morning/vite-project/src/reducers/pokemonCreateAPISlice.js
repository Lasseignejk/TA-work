import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const fetchPokemon2 = createApi({
	// reducerPath is what'll show in the redux dev tools. That's the name of your state variable.
	reducerPath: "fetchPokemon2",
	// the baseUrl does the BASE stuff. It'll fetch.
	baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2" }),
	// you HAVE to have an endpoint. the /pokemon will be added to the end of the base url. So when you run getPokemon, the url now looks like https://pokeapi.co/api/v2/pokemon
	endpoints: (builder) => ({
		getPokemon: builder.query({
			query: () => `/pokemon`,
		}),
		getPokemonById: builder.query({
			query: (id) => `/pokemon/${id}`,
		}),
	}),
});
// fetchPokemon2 creates an object with the queries, middleware, reducers, etc. all that data.
console.log(fetchPokemon2);

// useGet will run immediately, everytime it mounts. useLazy will wait for an event to trigger
export const { useGetPokemonQuery, useLazyGetPokemonQuery, useGetPokemonById } =
	fetchPokemon2;

export default fetchPokemon2;
