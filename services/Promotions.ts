export const getPromotions = async () => {
	const response = await fetch(
		"http://localhost:1337/api/promotions?populate=*",
		{
			headers: {
				Authorization:
					"bearer f6fe7e4e4a121fee0ccbb5cf0ebc9b67fdc8d8272bf243ebd19839f7eaad5806648164d5f4dd8416ec5cecd00ab18948d783665826fc950c2ddc1c7e1626597b4939293b6688fcf79bf4294898023119fefb9ffda662ec4d906625c8f97eb24801f620f6daede21b04626a9465e212005d74377c5e5c0c726de6e6901341fbb8",
			},
		}
	);

	return response.json();
};
