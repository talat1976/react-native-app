import { StackScreenProps } from '@react-navigation/stack'
import React, { FC, useMemo } from 'react'
import { FlatList, Image, ListRenderItem, StyleSheet, Text, View, TextInput } from 'react-native'
import Button from '../components/Button'
import { useStore } from '../context/StoreContext'
import { Cart, Pages, RootStackParamList } from '../tools/types'
import { FontAwesome5 } from '@expo/vector-icons'

type Props = StackScreenProps<RootStackParamList, Pages.Cart>

const CartScreen: FC<Props> = (props) => {
	const { selector } = useStore()

	const cartItems = useMemo(() => selector.getCartItems(), [])

	const total = useMemo(() => cartItems.reduce((total: number, c: Cart) => {
		return total + (c.product!.price + c.product!.shipping)
	}, 0), [])

	const onCheckout = () => {

	}

	const renderItem: ListRenderItem<Cart> = ({ item }) => (
		<View style={styles.item}>
			<Image style={styles.itemImg} source={item.product?.image} />
			<View style={styles.itemDetails}>
				<Text style={styles.itemText}>{item.product?.title}</Text>
				<Text style={styles.itemPrice}>${item.product?.price}</Text>
			</View>
		</View>
	)

	return (
		<View style={styles.container}>
			<FlatList
				data={cartItems}
				renderItem={renderItem}
				keyExtractor={p => p.productId}
			/>

			<Text style={styles.total}>Total: ${total}</Text>

			<View>
				<Text>Add Coupon</Text>
				<TextInput />
				<Button title="Apply" center />
			</View>

			<Button
				title="Checkout"
				onPress={onCheckout}
				center
				leading={<FontAwesome5 name="money-check" size={16} color="#fff" />}
			/>
		</View>
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
		fontSize: 18
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
