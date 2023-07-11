import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./reducers/counterSlice";
import { createClient } from "@supabase/supabase-js";
import "./App.css";
import { fetchPokemon } from "./reducers/pokeSlice";
import { fetchProducts } from "./reducers/productsSlice";

function App() {
	const supabase = createClient(
		import.meta.env.VITE_SUPABASE_URL,
		import.meta.env.VITE_SUPABASE_KEY
	);

	const counter = useSelector((state) => state.counter.value);
	const { value } = useSelector((state) => state.poke);

	const { values } = useSelector((state) => state.products);

	// console.log(values);
	const dispatch = useDispatch();
	return (
		<div className="flex flex-col justify-center items-center gap-5">
			<p className="text-5xl">{counter}</p>
			<div className="flex gap-3">
				<button
					className="w-10 h-10 bg-blue-600 rounded-full text-[rgb(220,220,220)]"
					onClick={() => dispatch(increment())}>
					+
				</button>
				<button
					className="w-10 h-10 bg-blue-600 rounded-full  text-[rgb(220,220,220)]"
					onClick={() => dispatch(decrement())}>
					-
				</button>
			</div>
			<div>
				<button
					className="border-2 border-yellow-400 bg-yellow-400 rounded-2xl px-3"
					onClick={() => dispatch(fetchPokemon())}>
					Fetch Pokemon
				</button>
			</div>
			<div className="flex justify-center">
				<button
					className="border-green-400 bg-green-400 rounded-2xl px-3"
					onClick={() => dispatch(fetchProducts())}>
					Fetch Products
				</button>
			</div>
			<div className="flex flex-wrap justify-center gap-5">
				{values.length != 0 &&
					values?.map((item) => (
						<div
							key={item.id}
							className="flex flex-col w-36 text-center rounded-2xl shadow-xl top_shadow hover:scale-105 duration-100 ease-in">
							<p className="text-xl underline">{item.name}</p>
							<div>
								{item.items != null &&
									item?.items?.map((product) => (
										<p>{product.description}</p>
									))}
							</div>
						</div>
					))}
			</div>
		</div>
	);
}

export default App;
