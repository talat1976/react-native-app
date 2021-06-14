export class Coupon {
	id: string
	num: string
	discount: number

	constructor(id: string, num: string, discount: number) {
		this.id = id
		this.num = num
		this.discount = discount
	}
}