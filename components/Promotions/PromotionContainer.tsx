import { useEffect, useRef } from "react";
import {
	Dimensions,
	ImageBackground,
	Image,
	ImageSourcePropType,
	Text,
	View,
	StyleSheet,
} from "react-native";
import Carousel from "react-native-snap-carousel";

import {
	fetchPromotions,
	selectPromotions,
} from "../../store/promotions/promotionsSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const PromotionContainer = () => {
	const promotionsState = useAppSelector(selectPromotions);
	const carouselRef = useRef(null);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchPromotions());
	}, []);

	const renderItem = (promo: any) => {
		const { item } = promo;
		const { promotionImage } = item.attributes;
		const {
			data: {
				attributes: { url },
			},
		} = promotionImage;
		const imageUrl: ImageSourcePropType = {
			uri: `http://localhost:1337${url}`,
		};
		return (
			<View style={styles.container} key={promo.index}>
				<Image source={imageUrl} style={styles.image} />
				<Text style={styles.header}>{item.attributes.primaryText}</Text>
				<Text style={styles.body}>{item.attributes.secondaryText}</Text>
			</View>
		);
	};
	return (
		<View style={{ alignItems: "center" }}>
			{promotionsState.promotions && (
				<Carousel
					activeSlideAlignment={"center"}
					contentContainerStyle={{ paddingRight: 40 }}
					ref={carouselRef}
					data={promotionsState.promotions}
					renderItem={renderItem}
					sliderWidth={SLIDER_WIDTH}
					itemWidth={ITEM_WIDTH}
				/>
			)}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		borderRadius: 8,
		width: ITEM_WIDTH,
		paddingBottom: 25,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation: 7,
	},
	image: {
		width: ITEM_WIDTH,
		height: 150,
	},
	header: {
		color: "#222",
		fontSize: 18,
		fontWeight: "bold",
		paddingLeft: 20,
		paddingTop: 20,
	},
	body: {
		color: "#222",
		fontSize: 13,
		paddingLeft: 20,
		paddingRight: 20,
	},
});

export default PromotionContainer;
