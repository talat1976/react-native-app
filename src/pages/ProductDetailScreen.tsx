import { StackScreenProps } from '@react-navigation/stack'
import React, { FC, useMemo } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Button from '../components/Button'
import { useStore } from '../context/StoreContext'
import { Pages, RootStackParamList } from '../tools/types'
import { Feather } from '@expo/vector-icons'
import Detail from '../components/Detail'
import { Colors } from '../tools/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

type Props = StackScreenProps<RootStackParamList, Pages.ProductDetail>

const ProductDetailScreen: FC<Props> = (props) => {
	const { route } = props
	const { selector } = useStore()

	const product = useMemo(() => selector.getProductById(route.params.productId), [])

	const onBuy = () => {

	}

	return (
		<View style={styles.container}>
			<Image style={styles.image} source={{ uri: product?.image }} />
			<View style={styles.content}>
				<Text style={styles.title}>{product?.title}</Text>

				<View style={styles.detailContainer}>
					<Detail value={`$${product?.price}`} title="Price" />
					<Detail value={`${product?.qty}+`} title="Quantity" />
					<Detail value={product && <MaterialCommunityIcons name={product.icon as any} size={24} color="black" />} title="Category" />
				</View>

				<Button
					title="Buy"
					onPress={onBuy}
					leading={<Feather name="shopping-bag" size={18} color="#fff" />}
					center
				/>
			</View>
		</View>
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
		marginBottom: 15,
		color: Colors.DarkBlue
	},
	detailContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 10
	}
})

export default ProductDetailScreen
