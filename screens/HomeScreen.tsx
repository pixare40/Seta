import { useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import CategoryMenu from "../components/CategoryMenu";
import PromotionContainer from "../components/Promotions/PromotionContainer";
import Specials from "../components/Specials";

export default function HomeScreen() {
	const [city, setCity] = useState<string>();

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={{ fontSize: 20, marginBottom: 20, marginTop: 20 }}>
				Discover
			</Text>
			<TextInput style={styles.textInput} placeholder="Search" />
			<CategoryMenu />
			<PromotionContainer />
			<Specials />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 20,
	},
	textInput: {
		height: 50,
		borderColor: "#fff",
		borderStyle: "solid",
		borderWidth: 1,
		marginBottom: 10,
		paddingHorizontal: 10,
		backgroundColor: "#fff",
		borderRadius: 10,
	},
});
