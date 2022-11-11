import { useEffect } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import {
	fetchCategories,
	selectCategories,
} from "../../store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import CategoryItem from "./CategoryItem";

const CategoryMenu = () => {
	const categoryState = useAppSelector(selectCategories);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchCategories());
	}, []);

	return (
		<ScrollView
			style={styles.scrollContainer}
			contentContainerStyle={{ height: 100 }}
			horizontal
		>
			{categoryState.error && <Text>Error Fetching Category Data</Text>}
			{categoryState.categories &&
				categoryState.categories.map((category) => {
					return (
						<CategoryItem
							key={category.id}
							id={category.id}
							name={category.attributes.name}
							categoryIcon={category.attributes.categoryIcon}
						/>
					);
				})}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	scrollContainer: {
		flexDirection: "row",
		height: 100,
	},
});

export default CategoryMenu;
