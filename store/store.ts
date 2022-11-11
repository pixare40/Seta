import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import categoriesReducer from "./categories/categoriesSlice";
import promotionsReducer from "./promotions/promotionsSlice";

export const store = configureStore({
	reducer: {
		category: categoriesReducer,
		promotions: promotionsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
