import { CategoryType } from "../tools/types"
import { Review } from "./Review"

export class Product {
	id: string
	image: any
	title: string
	description: string
	measure: string
	price: number
	shipping: number
	qty: number
	category: CategoryType
	reviews: Review[]

	constructor(
		id: string = "",
		title: string,
		description: string,
		measure: string,
		price: number,
		shipping: number,
		image: any,
		qty: number,
		category: CategoryType,
		reviews: Review[]
	) {
		this.id = id
		this.title = title
		this.description = description
		this.measure = measure
		this.price = price
		this.shipping = shipping
		this.image = image
		this.qty = qty
		this.category = category
		this.reviews = reviews
	}
}