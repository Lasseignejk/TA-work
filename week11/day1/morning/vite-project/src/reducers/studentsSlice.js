import { createSlice } from "@reduxjs/toolkit";

const studentsSlice = createSlice({
	name: "students",
	initialState: ["Jaye"],
	reducers: {
		// add yourself to the array
		addStudent: (state) => [...state, "Joe"],
		// remove the last student in the array

		// or this, courtesy of chatGPT
		// state.filter((_, index) => index < state.length - 1)

		// or this, from Joe
		// state.myArray = state.myArray.filter((_, index) => index !== state.myArray.length - 1)

		removeLastStudent: (state) => [...state.slice(0, state.length - 1)],
		addInputtedStudent: (state, action) => [...state, action.payload],
	},
});

export const { addStudent, removeLastStudent, addInputtedStudent } =
	studentsSlice.actions;
export default studentsSlice.reducer;
