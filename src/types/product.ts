export type TProduct = {
	_id?: string;
	slug: string;
	name: string;
	description: string;
	old_price: number;
	last_price: number;
	stock: number;
	images: string[];
	category: string;
	sub_category?: string;
	tags: string[];
	createdAt?: Date;
	updatedAt?: Date;
};
