import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPromotions } from "../../services/Promotions";
import { RootState } from "../store";
import { IPromotion } from "./types";

interface PromotionsState {
	promotions: IPromotion[];
	isLoading: boolean;
	error: any;
}

const initialState: PromotionsState = {
	promotions: [],
	isLoading: false,
	error: null,
};

export const fetchPromotions = createAsyncThunk(
	"promotions/fetchPromotions",
	async (thunkAPI) => {
		const response = await getPromotions();
		console.log("promotions response", response);
		return response.data as IPromotion[];
	}
);

export const promotionsSlice = createSlice({
	name: "categories",
	initialState,
	reducers: {
		fetchingPromotions: (state) => {
			state.isLoading = true;
		},
		addPromotions: (state, action: PayloadAction<any>) => {
			state.promotions = action.payload;
			state.isLoading = false;
		},
		errorFetchingPromotions: (state) => {
			state.error = "Error fetching categories";
			state.isLoading = false;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPromotions.fulfilled, (state, action) => {
			state.promotions = action.payload;
			state.isLoading = false;
		});
		builder.addCase(fetchPromotions.rejected, (state) => {
			state.isLoading = false;
			state.error = "Error Loading Categories";
		});
		builder.addCase(fetchPromotions.pending, (state) => {
			state.isLoading = true;
		});
	},
});

export const { fetchingPromotions, errorFetchingPromotions, addPromotions } =
	promotionsSlice.actions;

export const selectPromotions = (state: RootState) => state.promotions;

export default promotionsSlice.reducer;
