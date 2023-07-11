import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addFive } from "./reducers/counterSlice";
import { loginUser, logoutUser } from "./reducers/loginSlice";
import {
	addStudent,
	removeLastStudent,
	addInputtedStudent,
} from "./reducers/studentsSlice";
import { addToCart } from "./reducers/cartSlice";
import "./App.css";
import { useState } from "react";
import Cart from "./components/Cart";
import AddProduct from "./components/AddProduct";

function App() {
	const counter = useSelector((state) => state.counter);
	const login = useSelector((state) => state.login);
	const students = useSelector((state) => state.students);
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const [newStudent, setNewStudent] = useState("");
	const [total, setTotal] = useState(0);

	const handleSubmit = () => {
		dispatch(addInputtedStudent(newStudent));
		setNewStudent("");
	};

	return (
		<div className="flex flex-col gap-3">
			<h1>Products</h1>
			<AddProduct total={total} setTotal={setTotal} />
			<Cart total={total} setTotal={setTotal} />
			{/* <h3>{counter}</h3> */}
			{/* <div>
				<button onClick={() => dispatch(increment())}>+</button>
				<button onClick={() => dispatch(decrement())}>-</button>
				<button onClick={() => dispatch(addFive())}>+5</button>
			</div> */}
			{/* <div> */}
			{/* You cannot actually print the boolean value true/false. if you want to print true or false, you have to do something like below */}
			{/* <p>{login ? "true" : "false"}</p>
				<button onClick={() => dispatch(loginUser())}>login</button>
				<button onClick={() => dispatch(logoutUser())}>logout</button>
			</div> */}
			{/* <div>
				<p>{students.join(", ")}</p>
				<div className="flex gap-3 items-center">
					<input
						className="text-center rounded-xl"
						type="text"
						onChange={(e) => setNewStudent(e.target.value)}
						value={newStudent}
					/>
					<button onClick={() => handleSubmit()}>
						Add custom student
					</button>
				</div>
				<button onClick={() => dispatch(addStudent())}>
					Add student
				</button>
				<button onClick={() => dispatch(removeLastStudent())}>
					Remove last student
				</button>
			</div> */}
		</div>
	);
}

export default App;
