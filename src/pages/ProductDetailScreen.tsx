import { StackScreenProps } from '@react-navigation/stack'
import React, { FC, useMemo } from 'react'
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native'
import Button from '../components/Button'
import { ActionTypes, useStore } from '../context/StoreContext'
import { Pages, RootStackParamList } from '../tools/types'
import { FontAwesome5 } from '@expo/vector-icons'
import Detail from '../components/Detail'
import { Colors } from '../tools/colors'
import Separator from '../components/Separator'

type Props = StackScreenProps<RootStackParamList, Pages.ProductDetail>

const ProductDetailScreen: FC<Props> = (props) => {
	const { route } = props
	const { selector, dispatch } = useStore()

	const product = useMemo(() => selector.getProductById(route.params.productId), [route.params.productId])
	const total = useMemo(() => product!.price + product!.shipping, [product])

	const onAddToCart = () => {
		dispatch({ type: ActionTypes.addToCart, product: product! })
	}

	return (
		<ScrollView style={styles.container}>
			<Image style={styles.image} source={product?.image} />
			<View style={styles.content}>
				<Text style={styles.title}>{product?.title}</Text>

				<Text style={styles.description}>{product?.description}</Text>

				<View style={styles.detailContainer}>
					<Detail value={`$${product?.price}`} title="Price" />
					<Detail value={`$${product?.shipping}`} title="Shipping" />
					<Detail value={product?.measure} title="Measure" />
					<Detail value={product?.qty} title="Quantity" />
				</View>

				<Text style={styles.total}>Total: ${total}</Text>

				<Button
					title="Add To Cart"
					onPress={onAddToCart}
					leading={<FontAwesome5 name="shopping-cart" size={18} color="#fff"/>}
					center
				/>

				<Separator />

				<Text style={styles.reviewsTitle}>Reviews</Text>

				{product?.reviews.map(review =>
					<View key={review.id} style={styles.reviewItem}>
						<Text style={styles.reviewItemName}>{review.name}</Text>
						<Text style={styles.reviewItemText}>{review.text}</Text>
					</View>
				)}
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		padding: 15
	},
	image: {
		width: "100%",
		height: 300
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		marginBottom: 10,
		color: Colors.DarkBlue
	},
	description: {
		fontSize: 18,
		marginBottom: 10,
		color: Colors.DarkBlue
	},
	detailContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 10
	},
	total: {
		fontSize: 22,
		fontWeight: "bold",
		marginBottom: 10,
		color: Colors.DarkBlue
	},
	reviewsTitle: {
		fontSize: 22,
		fontWeight: "bold",
		marginBottom: 10,
		color: Colors.DarkBlue,
	},
	reviewsList: {
		flex: 1
	},
	reviewItem: {
		flex: 1,
		marginBottom: 10
	},
	reviewItemName: {
		color: Colors.DarkBlue,
		fontSize: 16,
		fontWeight: "bold",
	},
	reviewItemText: {
		color: Colors.DarkGray,
		fontSize: 18,
	}
})

export default ProductDetailScreen
