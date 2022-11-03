import { useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import CategoryMenu from "../components/CategoryMenu";

export default function HomeScreen() {
	const [city, setCity] = useState<string>();

	return (
		<ScrollView>
			<Text>Discover </Text>
			<TextInput placeholder="Search" />
			<CategoryMenu />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
