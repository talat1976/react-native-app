import { StackScreenProps } from '@react-navigation/stack'
import React, { FC, useState } from 'react'
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import Button from '../components/Button'
import { ActionTypes, useStore } from '../context/StoreContext'
import { Pages, RootStackParamList } from '../tools/types'
import { FontAwesome5 } from '@expo/vector-icons'
import CouponView from '../components/CouponView'
import Separator from '../components/Separator'
import { COUPONS } from '../context/data'
import { Colors } from '../tools/colors'

type Props = StackScreenProps<RootStackParamList, Pages.Cart>

const CartScreen: FC<Props> = (props) => {
	const { navigation } = props

	const { state, selector, dispatch } = useStore()

	const onCheckout = () => {
		navigation.navigate(Pages.Checkout)
	}

	const onApplyCoupon = (couponNumber: string) => {
		const coupon = COUPONS.find(c => c.num === couponNumber)

		if(coupon) {
			dispatch({ type: ActionTypes.applyCoupon, coupon })
		}
	}

	return (
		<ScrollView style={styles.container}>
			{state.cart.map(product =>
				<View style={styles.item} key={product.id}>
					<Image style={styles.itemImg} source={product.image} />
					<View style={styles.itemDetails}>
						<Text style={styles.itemText}>{product.title}</Text>
						<View style={{ alignItems: "flex-end" }}>
							<Text style={styles.itemPrice}>Net price: ${product.price}</Text>
							<Text style={styles.itemPriceWithShipping}>${product.price + product.shipping}</Text>
						</View>
					</View>
				</View>
			)}

			<CouponView onApply={onApplyCoupon} />

			<Separator />

			<Text style={styles.total}>Total: ${selector.getTotalPrice()}</Text>

			<Button
				title="Checkout"
				onPress={onCheckout}
				center
				leading={<FontAwesome5 name="money-check" size={16} color="#fff" />}
			/>
		</ScrollView>
	)
}

export default CartScreen

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	item: {
		paddingBottom: 15,
		marginBottom: 15,
		borderBottomWidth: 1,
		borderBottomColor: "#ddd",
		flexDirection: "row",
		alignItems: "center"
	},
	itemDetails: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	itemText: {
		fontSize: 18,
		fontWeight: "bold"
	},
	itemPrice: {
		fontSize: 16,
		color: Colors.DarkGray
	},
	itemPriceWithShipping: {
		fontSize: 18,
		color: Colors.DarkBlue,
		fontWeight: "bold"
	},
	itemImg: {
		height: 40,
		width: 40,
		marginRight: 20
	},
	itemQty: {
		backgroundColor: "#333",
		color: "#fff",
		paddingBottom: 1,
		paddingHorizontal: 6,
		marginTop: 2,
		marginLeft: 10,
		fontSize: 16,
		borderRadius: 5
	},
	total: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 20,
		textAlign: "right"
	}
})
