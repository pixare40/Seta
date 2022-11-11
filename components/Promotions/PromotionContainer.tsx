import { useEffect } from "react";
import { Text, View } from "react-native";
import {
	fetchPromotions,
	selectPromotions,
} from "../../store/promotions/promotionsSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";

const PromotionContainer = () => {
	const promotionsState = useAppSelector(selectPromotions);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchPromotions());
	}, []);
	return (
		<View>
			<Text>{}</Text>
		</View>
	);
};

export default PromotionContainer;
