import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Fonts } from '../tools/fonts'

type Props = {
	value: number
}

const Badge: FC<Props> = (props) => {
	const { value } = props

	return (
		<View style={styles.container}>
			<Text style={styles.text}>{value}</Text>
		</View>
	)
}

export default Badge

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
	},
	text: {
		color: "#fff",
		fontSize: 10,
		fontFamily: Fonts.SemiBold,
		backgroundColor: "red",
		borderRadius: 15,
		height: 15,
		minWidth: 15,
		paddingHorizontal: 3,
		textAlign: "center"
	}
})
