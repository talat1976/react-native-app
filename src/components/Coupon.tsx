import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import Button from './Button'

const Coupon = () => {
	return (
		<View>
			<Text>Add Coupon</Text>
			<TextInput />
			<Button title="Apply" center />
		</View>
	)
}

export default Coupon

const styles = StyleSheet.create({})
