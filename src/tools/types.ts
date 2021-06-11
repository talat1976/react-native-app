export enum Pages {
	Home = "Home",
	ProductList = "ProductList",
	ProductDetail = "ProductDetail",
	Cart = "Cart"
}

export type RootStackParamList = {
	[Pages.Home]: undefined,
	[Pages.ProductList]: { type: string }
	[Pages.ProductDetail]: { productId: string, productName: string }
	[Pages.Cart]: undefined
}

export type Product = {
	id: string
	title: string
	price: number
	image: string
	qty: number
	icon: string
}

export type Cart = {
	productId: string
	product?: Product,
	qty: number
}