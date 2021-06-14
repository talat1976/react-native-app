import React, { useContext, useReducer } from "react"
import { FC } from "react"
import { Category } from "../models/Category"
import { Product } from "../models/Product"
import { Cart, CategoryType } from "../tools/types"
import { CATEGORIES, PRODUCTS } from "./data"

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
	getProductsByCategory: (type: CategoryType) => Product[]
	getProductById: (productId: string) => (Product | null)
	getProductsCount: (type: CategoryType) => number
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
		categories: CATEGORIES,
		products: PRODUCTS,
		cart: []
	}

	const [state, dispatch] = useReducer<Reducer<State, Action>>((state: State, action: Action) => {
		switch (action.type) {
			case ActionTypes.addToCart: {

				const item = state.cart.find(c => c.productId === action.productId)

				if (item) {
					return state
				}

				return { ...state, cart: [...state.cart, { productId: action.productId, qty: 1 }] }
			}

			default:
				return state
		}
	}, initState)

	const selector: Selector = {
		getProductsByCategory: (type: CategoryType) => {
			return state.products.filter(p => p.category === type)
		},
		getProductById: (productId: string) => {
			const product = state.products.find(p => p.id === productId)
			return product ? product : null
		},
		getCartItems: () => {
			return state.cart.map(c => {
				const product = state.products.find(p => p.id === c.productId)
				return { ...c, product }
			})
		},
		getProductsCount: (type: CategoryType) => {
			return state.products.filter(p => p.category === type).length
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