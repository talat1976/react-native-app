import React, { FC } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList, Pages, CategoryType } from '../tools/types'
import { useStore } from '../context/StoreContext'
import { IMAGES } from '../tools/images'
import CategoryView from '../components/CategoryView'

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, Pages.Home>

type Props = {
	navigation: HomeScreenNavigationProp
}

const HomeScreen: FC<Props> = (props) => {
	const { navigation } = props
	const { state, selector } = useStore()

	const onPress = (type: CategoryType) => {
		navigation.navigate(Pages.ProductList, {
			type, title: `${type} (${selector.getProductsCount(type)})`
		})
	}

	return (
		<View style={styles.container}>
			<View style={styles.col}>
				<CategoryView category={state.categories[0]} onPress={() => onPress(CategoryType.Tshirts)} />
				<CategoryView category={state.categories[1]} onPress={() => onPress(CategoryType.Pants)} />
				<CategoryView category={state.categories[2]} onPress={() => onPress(CategoryType.Shoes)} />
			</View>

			<View style={styles.col}>
				<CategoryView category={state.categories[3]} onPress={() => onPress(CategoryType.Dresses)} />
				<CategoryView category={state.categories[4]} onPress={() => onPress(CategoryType.Babies)} />
				<CategoryView category={state.categories[5]} onPress={() => onPress(CategoryType.Glasses)} />
			</View>
		</View>
	)
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		padding: 5,
	},
	col: {
		flex: 1,
	}
})

export default HomeScreen
