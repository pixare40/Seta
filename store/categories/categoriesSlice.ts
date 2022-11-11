import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getCategories } from "../../services/Categories";
import { ICategory } from "./types";

interface CategoriesState {
	categories: ICategory[];
	isLoading: boolean;
	error: any;
}

const initialState: CategoriesState = {
	categories: [],
	isLoading: false,
	error: null,
};

export const fetchCategories = createAsyncThunk(
	"categories/fetchCategories",
	async (thunkAPI) => {
		console.log("Thunk api object", thunkAPI);
		const response = await getCategories();
		console.log("response", response);
		return response.data as ICategory[];
	}
);

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
			state.isLoading = false;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchCategories.fulfilled, (state, action) => {
			state.categories = action.payload;
			state.isLoading = false;
		});
		builder.addCase(fetchCategories.rejected, (state) => {
			state.isLoading = false;
			state.error = "Error Loading Categories";
		});
		builder.addCase(fetchCategories.pending, (state) => {
			state.isLoading = true;
		});
	},
});

export const { fetchingCategories, errorFetchingCategories, addCategories } =
	categoriesSlice.actions;

export const selectCategories = (state: RootState) => state.category;

export default categoriesSlice.reducer;
