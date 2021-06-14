import { Product } from "../models/Product"

export enum Pages {
	Home = "Home",
	ProductList = "ProductList",
	ProductDetail = "ProductDetail",
	Cart = "Cart"
}

export enum CategoryType {
	Tshirts = "Tshirts",
	Pants = "Pants",
	Shoes = "Shoes",
	Dresses = "Dresses",
	Babies = "Babies",
	Glasses = "Glasses",
}

export type RootStackParamList = {
	[Pages.Home]: undefined,
	[Pages.ProductList]: { type: CategoryType, title: string }
	[Pages.ProductDetail]: { productId: string, productName: string }
	[Pages.Cart]: undefined
}

export type Cart = {
	productId: string
	product?: Product,
	qty: number
}