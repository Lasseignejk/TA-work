import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_KEY
);

const initialState = {
	values: [],
	loading: false,
};

export const fetchProducts = createAsyncThunk("data/getProducts", async () => {
	const { data } = await supabase.from("ProductsDatabase").select();

	const parsedData = data.map((obj) => {
		const parsedItems = JSON.parse(obj.items);
		return { ...obj, items: parsedItems };
	});

	return parsedData;
});

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchProducts.pending]: (state) => {
			state.loading = true;
		},
		[fetchProducts.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.values = payload;
		},
		[fetchProducts.rejected]: (state) => {
			state.loading = false;
		},
	},
});

export default productsSlice.reducer;
