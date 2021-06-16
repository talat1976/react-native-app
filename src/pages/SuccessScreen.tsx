import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../tools/colors'
import { AntDesign } from '@expo/vector-icons'
import Button from '../components/Button'
import { StackScreenProps } from '@react-navigation/stack'
import { Pages, RootStackParamList } from '../tools/types'
import { Fonts } from '../tools/fonts'

type Props = StackScreenProps<RootStackParamList, Pages.Success>

const SuccessScreen: FC<Props> = (props) => {
	const { navigation } = props

	const onPress = () => {
		navigation.popToTop()
	}

	return (
		<View style={styles.container}>
			<AntDesign style={styles.icon} name="checkcircle" size={45} color={Colors.Blue} />
			<Text style={styles.thank}>Thank You!</Text>
			<Text style={styles.text}>Your Order in Progress</Text>
			<Button title="Continue Shopping" onPress={onPress} />
		</View>
	)
}

export default SuccessScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 15,
		alignItems: "center"
	},
	icon: {
		marginTop: 20
	},
	thank: {
		fontSize: 40,
		color: Colors.Blue,
		marginTop: 10,
		fontFamily: Fonts.Bold,
	},
	text: {
		fontSize: 25,
		color: Colors.DarkBlue,
		marginBottom: 50,
		fontFamily: Fonts.SemiBold,
	}
})
