import React, { FC } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { RootStackParamList, Pages } from '../tools/types'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from '../tools/colors'
import { Product } from '../models/Product'

type HomeScreenNavigationProp = CompositeNavigationProp<StackNavigationProp<RootStackParamList, Pages.Home>, any>

type Props = {
	product: Product
}

const ProductView: FC<Props> = (props) => {
	const { product } = props
	const { navigate } = useNavigation<HomeScreenNavigationProp>()

	return (
		<View style={styles.card}>
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.content}
					onPress={() => navigate(Pages.ProductDetail, { productId: product.id, productName: product.title })}
				>
					<Image style={styles.image} source={product.image} />
					<View style={styles.info}>
						<Text style={styles.text}>{product.title}</Text>
						<Text style={styles.price}>${product.price}</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default ProductView

const styles = StyleSheet.create({
	card: {
		margin: 10,
		elevation: 2,
		borderRadius: 6,
		backgroundColor: "#fff",
	},
	container: {
		flex: 1,
		padding: 10,
		width: "100%"
	},
	content: {
		flex: 1,
		marginBottom: 10
	},
	info: {
		flexDirection: "row",
		marginTop: 10,
		justifyContent: "space-between"
	},
	text: {
		color: Colors.DarkBlue,
		fontSize: 20,
		fontWeight: "bold",
	},
	price: {
		color: Colors.DarkBlue,
		fontSize: 20,
		fontWeight: "bold",
	},
	textColor: {
		color: "#999"
	},
	image: {
		flex: 1,
		width: "100%",
		height: 200
	}
})
