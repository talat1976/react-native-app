import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import HomeScreen from '../pages/HomeScreen'
import ProductDetailScreen from '../pages/ProductDetailScreen'
import { Colors } from '../tools/colors'
import { Pages, RootStackParamList } from '../tools/types'
import { FontAwesome5 } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CartScreen from '../pages/CartScreen'
import { useStore } from '../context/StoreContext'
import Badge from '../components/Badge'
import ProductListScreen from '../pages/ProductListScreen'

const Stack = createStackNavigator<RootStackParamList>()

const Navigation = () => {
	const { state } = useStore()

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={Pages.Home}>
				<Stack.Screen
					name={Pages.Home}
					component={HomeScreen}
					options={{
						headerStyle: {
							backgroundColor: Colors.LightBlue
						},
						headerTintColor: '#fff',
						headerTitleStyle: {
							fontWeight: 'bold',
						},
						title: "Shopify",
					}}
				/>

				<Stack.Screen
					name={Pages.ProductList}
					component={ProductListScreen}
					options={({ navigation }) => ({
						headerStyle: {
							backgroundColor: Colors.LightBlue
						},
						headerTintColor: '#fff',
						headerTitleStyle: {
							fontWeight: 'bold',
						},
						title: "List",
						headerRight: () => (
							<TouchableOpacity onPress={() => navigation.navigate(Pages.Cart)}>
								{state.cart.length > 0 && <Badge value={state.cart.length} />}
								<FontAwesome5 name="shopping-cart" size={18} color="#fff" style={{ marginRight: 10 }} />
							</TouchableOpacity>
						)
					})}
				/>

				<Stack.Screen
					name={Pages.ProductDetail}
					component={ProductDetailScreen}
					options={({ route }) => ({ title: route.params.productName })}
				/>

				<Stack.Screen
					name={Pages.Cart}
					component={CartScreen}
					options={{
						title: "Cart",
						headerStyle: {
							backgroundColor: Colors.LightBlue
						},
						headerTintColor: '#fff',
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigation

const styles = StyleSheet.create({})
