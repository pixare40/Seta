import { useEffect } from "react";
import { View, Text } from "react-native";
import {
	fetchCategories,
	selectCategories,
} from "../store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import CategoryItem from "./CategoryItem";

const CategoryMenu = () => {
	const categoryState = useAppSelector(selectCategories);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchCategories());
	}, []);

	return (
		<View>
			{categoryState.error && <Text>Error Fetching Category Data</Text>}
			{categoryState.categories &&
				categoryState.categories.map((category) => {
					return (
						<CategoryItem
							key={category.id}
							name={category.attributes.name}
							categoryIcon={category.attributes.categoryIcon}
						/>
					);
				})}
		</View>
	);
};

export default CategoryMenu;
