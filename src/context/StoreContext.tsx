import React, { useContext, useReducer } from "react"
import { FC } from "react"
import { Category } from "../models/Category"
import { Cart, Product } from "../tools/types"

const images = [
	"https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682&w=678&h=381",
	"https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=megaMenuTshirt.jpg&Wx=750&Page=general&Vr=96&Hr=96&Format=jpg&Language=1"
]

export enum ActionTypes {
	addToCart = "addToCart"
}

type State = {
	categories: Category[]
	products: Product[],
	cart: Cart[]
}

type Action =
	| { type: ActionTypes.addToCart, productId: string }

type Selector = {
	getProductById: (productId: string) => (Product | null)
	getCartItems: () => Cart[]
}

type ContextStore = {
	state: State
	dispatch: React.Dispatch<Action>
	selector: Selector
}

type Reducer<S, A> = (prevState: S, action: A) => S

const context = React.createContext<any>(undefined)

export const StoreProvider: FC = (props) => {
	const { children } = props

	const initState: State = {
		categories: [
			new Category("Tshirts", images[0]),
			new Category("Pants", images[1]),
			new Category("shoes", images[0]),
			new Category("Dresses", images[1]),
			new Category("Babies", images[0]),
			new Category("Glasses", images[1]),
		],
		products: [
			{ id: "asdfasd4", title: "Nike M27", price: 99.9, image: images[0], qty: 12, icon: "shoe-formal" },
			{ id: "sdgsdfg7", title: "Michael 1992", price: 120, image: images[1], qty: 34, icon: "tshirt-crew" }
		],
		cart: []
	}

	const [state, dispatch] = useReducer<Reducer<State, Action>>((state: State, action: Action) => {
		switch (action.type) {
			case ActionTypes.addToCart: {

				const item = state.cart.find(c => c.productId === action.productId)

				if (item) {
					const cart = state.cart.map(c => {
						if (c.productId === action.productId) {
							return { ...c, qty: c.qty + 1 }
						}
						return c
					})

					return { ...state, cart }
				}

				return { ...state, cart: [...state.cart, { productId: action.productId, qty: 1 }] }
			}

			default:
				return state
		}
	}, initState)

	const selector: Selector = {
		getProductById: (productId: string) => {
			const product = state.products.find(p => p.id === productId)
			return product ? product : null
		},
		getCartItems: () => {
			return state.cart.map(c => {
				const product = state.products.find(p => p.id === c.productId)
				return { ...c, product }
			})
		}
	}

	const store = { state, dispatch, selector }

	return (
		<context.Provider value={store}>
			{children}
		</context.Provider>
	)
}

export const useStore = () => {
	const store = useContext(context)
	return store as ContextStore
}