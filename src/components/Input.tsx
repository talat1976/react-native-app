import React, { FC } from 'react'
import { StyleSheet, Text, View, TextInput, KeyboardType } from 'react-native'
import { Colors } from '../tools/colors'
import { Fonts } from '../tools/fonts'

type Props = {
	name?: string
	value?: string
	lable?: string
	placeholder?: string
	error?: string
	keyboardType?: KeyboardType
	onChangeText?: (text: string, name: string) => void
}

const Input: FC<Props> = (props) => {
	const { lable, value, placeholder, name, error, onChangeText, keyboardType } = props

	return (
		<View style={styles.container}>
			<Text style={styles.lable}>{lable}</Text>
			<TextInput
				value={value}
				style={[styles.input, { borderColor: error ? "red" : Colors.Gray }]}
				placeholder={placeholder}
				onChangeText={(t) => onChangeText?.(t, name || "")}
				keyboardType={keyboardType}
			/>
			{error ? <Text style={styles.error}>{error}</Text> : null}
		</View>
	)
}

export default Input

const styles = StyleSheet.create({
	container: {
		marginBottom: 15,
		flex: 1
	},
	lable: {
		marginBottom: 5,
		fontSize: 15,
		color: Colors.DarkBlue,
		fontFamily: Fonts.Medium,
	},
	input: {
		backgroundColor: "#fff",
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderWidth: 1,
		borderRadius: 5,
		fontFamily: Fonts.Medium,
	},
	error: {
		color: "red"
	}
})
