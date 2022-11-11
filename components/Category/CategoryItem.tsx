import { TouchableOpacity, View, Text, StyleSheet, Button } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

interface ICategoryItemProps {
	name: string;
	categoryIcon: string;
	id: number;
	onPressed?: (event: any) => void;
}

const CategoryItem = (props: ICategoryItemProps) => {
	return (
		<TouchableOpacity onPress={(event) => {}}>
			<View style={styles.container}>
				<FontAwesome5
					style={{ alignSelf: "center" }}
					name={props.categoryIcon as any}
					size={18}
					color="#EA4434"
					onPress={props.onPressed}
				/>
				<Text style={styles.textStyle}>{props.name}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 84,
		width: 84,
		justifyContent: "center",
		alignItems: "center",
	},
	textStyle: {
		alignSelf: "center",
		margin: 10,
	},
	selected: {
		backgroundColor: "red",
	},
});

export default CategoryItem;
