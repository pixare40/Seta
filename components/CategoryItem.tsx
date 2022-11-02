import { Pressable, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface ICategoryItemProps {
	name: string;
	categoryIcon: string;
	onPressed?: (event: any) => void;
}

const CategoryItem = (props: ICategoryItemProps) => {
	return (
		<View>
			<Pressable>
				<FontAwesome
					style={{ alignSelf: "center" }}
					name={props.categoryIcon as any}
					size={18}
					color="#EA4434"
					onPress={props.onPressed}
				/>
			</Pressable>
		</View>
	);
};

export default CategoryItem;
