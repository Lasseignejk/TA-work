import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../reducers/cartSlice";
import { products } from "../cartItems";

export default function AddProduct({ total, setTotal }) {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);

	useEffect(() => {
		const newTotal = cart.reduce(
			(acc, item) => acc + parseFloat(item.price),
			0
		);
		setTotal(newTotal);
	}, [cart]);

	const handleAddToCart = (item) => {
		dispatch(addToCart(item));
	};

	return (
		<div className="flex flex-wrap gap-5 justify-center">
			{products?.map((item, index) => (
				<div key={index} className="flex flex-col gap-2">
					<h3>{item.name}</h3>
					<img
						src={item.img}
						alt=""
						className="w-40 h-40 object-cover object-center rounded-xl"
					/>

					<button onClick={() => handleAddToCart(item)}>
						Add to Cart
					</button>
				</div>
			))}
			<div></div>
		</div>
	);
}
