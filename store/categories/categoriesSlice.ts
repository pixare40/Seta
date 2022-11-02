import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getCategories } from "../../services/CategoryServices";

interface CategoriesState {
	categories: [];
	isLoading: boolean;
	error: any;
}

const initialState: CategoriesState = {
	categories: [],
	isLoading: false,
	error: null,
};

export const categoriesSlice = createSlice({
	name: "categories",
	initialState,
	reducers: {
		fetchingCategories: (state) => {
			state.isLoading = true;
		},
		addCategories: (state, action: PayloadAction<any>) => {
			state.categories = action.payload;
			state.isLoading = false;
		},
		errorFetchingCategories: (state) => {
			state.error = "Error fetching Categories";
		},
	},
});

export const { fetchingCategories, errorFetchingCategories, addCategories } =
	categoriesSlice.actions;

const fetchCategories = () => async (dispatch: any) => {
	dispatch(fetchingCategories());
	try {
		const response = await getCategories();
		console.log("response received", response);
	} catch {
		dispatch(errorFetchingCategories());
	}
};

export const selectCategories = (state: RootState) => state.category.categories;

export default categoriesSlice.reducer;
