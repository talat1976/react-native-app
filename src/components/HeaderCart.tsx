import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useStore } from '../context/StoreContext'
import Badge from './Badge'
import { FontAwesome5 } from '@expo/vector-icons'
import { Pages } from '../tools/types'
import { useNavigation } from '@react-navigation/native'

const HeaderCart = () => {
	const { state } = useStore()
	const { navigate } = useNavigation()

	return state.cart.length > 0 ? (
		<TouchableOpacity onPress={() => navigate(Pages.Cart)}>
			<Badge value={state.cart.length} />
			<FontAwesome5 name="shopping-cart" size={18} color="#fff" style={{ marginRight: 10 }} />
		</TouchableOpacity>
	) : null
}

export default HeaderCart
