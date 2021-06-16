import React, { FC, useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Colors } from '../tools/colors'
import { Fonts } from '../tools/fonts'
import Button from './Button'

type Props = {
	onApply: (coupon: string) => void
}

const CouponView: FC<Props> = (props) => {
	const { onApply } = props

	const [text, setText] = useState("")

	return (
		<View>
			<Text style={styles.text}>Add Coupon (Example: 11111)</Text>
			<TextInput value={text} onChangeText={t => setText(t)} keyboardType="number-pad" style={styles.input} />
			{text.length ?
				<Button title="Apply" center onPress={() => onApply(text)} />
				: null
			}
		</View>
	)
}

export default CouponView

const styles = StyleSheet.create({
	text: {
		fontSize: 15,
		marginBottom: 5,
		color: Colors.DarkBlue,
		fontFamily: Fonts.SemiBold,
	},
	input: {
		backgroundColor: "#fff",
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderColor: Colors.Gray,
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 10,
		fontFamily: Fonts.Medium,
	}
})
