import React, { FC } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList, Pages } from '../tools/types'
import { useStore } from '../context/StoreContext'
import { IMAGES } from '../tools/images'
import CategoryView from '../components/CategoryView'

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, Pages.Home>

type Props = {
	navigation: HomeScreenNavigationProp
}

const HomeScreen: FC<Props> = (props) => {
	const { navigation } = props
	const { state } = useStore()

	const onPress = (type: string) => {
		navigation.navigate(Pages.ProductList, { type })
	}

	return (
		<View style={styles.container}>
			<View style={styles.col}>
				<CategoryView category={state.categories[0]} onPress={() => onPress("Tshirts")} />
				<CategoryView category={state.categories[1]} onPress={() => onPress("Pants")} />
				<CategoryView category={state.categories[2]} onPress={() => onPress("Shoes")} />
			</View>

			<View style={styles.col}>
				<CategoryView category={state.categories[3]} onPress={() => onPress("Dresses")} />
				<CategoryView category={state.categories[4]} onPress={() => onPress("Babies")} />
				<CategoryView category={state.categories[5]} onPress={() => onPress("Glasses")} />
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
