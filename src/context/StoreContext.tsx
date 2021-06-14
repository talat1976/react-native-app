import React, { useContext, useReducer } from "react"
import { FC } from "react"
import { Category } from "../models/Category"
import { Coupon } from "../models/Coupon"
import { Product } from "../models/Product"
import { CategoryType } from "../tools/types"
import { CATEGORIES, PRODUCTS } from "./data"

export enum ActionTypes {
	addToCart = "addToCart",
	applyCoupon = "applyCoupon"
}

type State = {
	categories: Category[]
	products: Product[],
	cart: Product[],
	totalPrice: number
	coupon: Coupon | null
}

type Action =
	| { type: ActionTypes.addToCart, product: Product }
	| { type: ActionTypes.applyCoupon, coupon: Coupon }

type Selector = {
	getProductsByCategory: (type: CategoryType) => Product[]
	getProductById: (productId: string) => (Product | null)
	getProductsCount: (type: CategoryType) => number
	getTotalPrice: () => number
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
		cart: [],
		totalPrice: 0,
		coupon: null
	}

	const [state, dispatch] = useReducer<Reducer<State, Action>>((state: State, action: Action) => {
		switch (action.type) {
			case ActionTypes.addToCart: {
				const item = state.cart.find(p => p.id === action.product.id)

				if (item) {
					return state
				}

				return {
					...state,
					cart: [...state.cart, action.product],
					totalPrice: state.totalPrice + (action.product.price + action.product.shipping)
				}
			}

			case ActionTypes.applyCoupon: {
				return { ...state, coupon: action.coupon }
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
		getProductsCount: (type: CategoryType) => {
			return state.products.filter(p => p.category === type).length
		},
		getTotalPrice: () => {
			if(state.coupon === null) {
				return state.totalPrice
			}

			return state.totalPrice - state.coupon.discount
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