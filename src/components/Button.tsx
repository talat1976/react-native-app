import React, { FC } from 'react'
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../tools/colors'
import { Fonts } from '../tools/fonts'

type Props = {
	title: string
	leading?: any
	trailing?: any
	center?: boolean
	onPress?: ((event: GestureResponderEvent) => void) | undefined
}

const Button: FC<Props> = (props) => {
	const { title, leading, trailing, center, onPress } = props

	return (
		<TouchableOpacity style={[styles.container, center && { justifyContent: "center" }]} onPress={onPress}>
			{leading && <View style={styles.leading}>{leading}</View>}
			<Text style={styles.text}>{title}</Text>
			{trailing && <View style={styles.trailing}>{trailing}</View>}
		</TouchableOpacity>
	)
}

export default Button

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.LightBlue,
		color: "#fff",
		paddingVertical: 8,
		paddingHorizontal: 10,
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 5
	},
	text: {
		color: "#fff",
		fontSize: 16,
		fontFamily: Fonts.SemiBold,
	},
	leading: {
		marginRight: 10
	},
	trailing: {
		marginLeft: 10
	}
})
