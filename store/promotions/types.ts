export interface IPromotion {
	id: number;
	attributes: {
		name: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		primarytext: string;
		secondaryText: string;
		description: string;
		url: string;
	};
}
