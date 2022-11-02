import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories/categoriesSlice";

export const store = configureStore({
	reducer: {
		category: categoriesReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
