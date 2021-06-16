import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../tools/colors'
import { Fonts } from '../tools/fonts'

type Props = {
	title: string
	value: any
}

const Detail: FC<Props> = (props) => {
	const { title, value } = props

	return (
		<View style={styles.container}>
			<Text style={styles.value}>{value}</Text>
			<Text style={styles.title}>{title}</Text>
		</View>
	)
}

export default Detail

const styles = StyleSheet.create({
	container: {
		marginBottom: 15,
		alignItems: "center"
	},
	value: {
		fontSize: 20,
		fontFamily: Fonts.SemiBold,
		color: Colors.DarkBlue
	},
	title: {
		fontSize: 14,
		fontFamily: Fonts.Medium,
		color: "#777"
	}
})
