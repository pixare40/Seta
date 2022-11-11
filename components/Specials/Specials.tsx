import { StyleSheet, Text, View } from "react-native";

const Specials = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Specials For You</Text>
			<View style={styles.specials} />
			<View style={styles.specials} />
			<View style={styles.specials} />
			<View style={styles.specials} />
			<View style={styles.specials} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
	},
	header: {
		color: "#222",
		fontSize: 18,
		fontWeight: "bold",
		paddingLeft: 20,
		paddingTop: 20,
		paddingBottom: 20,
	},
	specials: {
		height: 150,
		backgroundColor: "#000",
		paddingTop: 10,
		borderRadius: 5,
		marginBottom: 10,
	},
});

export default Specials;
