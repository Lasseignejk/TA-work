import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../reducers/cartSlice";

export default function Cart({ total, setTotal }) {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	return (
		<div>
			<h1>Cart</h1>
			<div className="flex flex-wrap gap-5 justify-center">
				{cart.length != 0
					? cart.map((item, index) => (
							<div key={index} className="flex flex-col gap-2">
								<h3>{item.name}</h3>
								<img
									src={item.img}
									alt=""
									className="w-40 h-40 object-cover object-center rounded-xl"
								/>

								<button
									onClick={() =>
										dispatch(removeFromCart(index))
									}>
									Remove
								</button>
							</div>
					  ))
					: "Your cart is empty"}
			</div>
			{cart.length != 0 && <p>${total}</p>}
		</div>
	);
}
