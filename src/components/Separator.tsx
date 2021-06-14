import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { Colors } from '../tools/colors'

type Props = {
	color?: string
}

const Separator: FC<Props> = (props) => {
	const { color = Colors.Gray } = props
	return (
		<View style={[styles.hr, { backgroundColor: color }]}></View>
	)
}

export default Separator

const styles = StyleSheet.create({
	hr: {
		height: 1,
		width: "100%",
		marginVertical: 20
	}
})
