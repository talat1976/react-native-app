export enum Pages {
	Home = "Home",
	ProductList = "ProductList",
	ProductDetail = "ProductDetail",
	Cart = "Cart",
	Checkout = "Checkout",
	Success = "Success",
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
	[Pages.Checkout]: undefined
	[Pages.Success]: undefined
}