import { StackScreenProps } from '@react-navigation/stack'
import React, { useState } from 'react'
import { FC } from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'
import Button from '../components/Button'
import Input from '../components/Input'
import Separator from '../components/Separator'
import { Colors } from '../tools/colors'
import { Pages, RootStackParamList } from '../tools/types'
import { Feather } from '@expo/vector-icons'

type CheckoutForm = {
	firstName: string
	lastName: string
	email: string
	phone: string
	country: string
	city: string
	address: string
	cardHolderName: string
	cardHolderID: string
	cardNumber: string
	cardExp: string
	cardCVV: string
}

const initForm = {
	firstName: "",
	lastName: "",
	email: "",
	phone: "",
	country: "",
	city: "",
	address: "",
	cardHolderName: "",
	cardHolderID: "",
	cardNumber: "",
	cardExp: "",
	cardCVV: "",
}

type Props = StackScreenProps<RootStackParamList, Pages.Checkout>

const CheckoutScreen: FC<Props> = (props) => {
	const { navigation } = props

	const [form, setForm] = useState<CheckoutForm>(initForm)
	const [errors, setErrors] = useState<CheckoutForm>(initForm)

	const valid = (): boolean => {
		let valid = true

		setErrors(initForm)

		Object.keys(form).forEach((key: string) => {
			const value = form[key as keyof CheckoutForm]

			if(!value || value.length === 0) {
				setErrors(e => ({ ...e, [key]: "required" }))
				valid = false
			}
		})

		return valid
	}

	const onOrder = () => {
		if(valid()) {
			navigation.popToTop()
			navigation.push(Pages.Success)
		}
	}

	const onChangeText = (text: string, name: string) => {
		setForm(f => ({ ...f, [name]: text }))
	}

	return (
		<ScrollView style={styles.container}>
			<Text style={styles.title}>Shipping Details</Text>
			<Input
				lable="First Name" placeholder="First Name" value={form.firstName}
				name="firstName" onChangeText={onChangeText} error={errors.firstName}
			/>
			<Input
				lable="Last Name" placeholder="Last Name" value={form.lastName}
				name="lastName" onChangeText={onChangeText} error={errors.lastName}
			/>
			<Input
				lable="Email" placeholder="Email" value={form.email}
				name="email" onChangeText={onChangeText} error={errors.email}
			/>
			<Input
				lable="Phone" placeholder="Phone" value={form.phone} error={errors.phone}
				name="phone" onChangeText={onChangeText} keyboardType="phone-pad"
			/>
			<Input
				lable="Country" placeholder="Country" value={form.country}
				name="country" onChangeText={onChangeText} error={errors.country}
			/>
			<Input
				lable="City" placeholder="City" value={form.city}
				name="city" onChangeText={onChangeText} error={errors.city}
			/>
			<Input
				lable="Address" placeholder="Address" value={form.address}
				name="address" onChangeText={onChangeText} error={errors.address}
			/>

			<Separator />

			<Text style={styles.title}>Credit Card Details</Text>
			<Input
				lable="Card Holder Name"
				placeholder="Card Holder Name"
				value={form.cardHolderName}
				name="cardHolderName"
				onChangeText={onChangeText}
				error={errors.cardHolderName}
			/>
			<Input
				lable="Card Holder ID"
				placeholder="Card Holder ID"
				value={form.cardHolderID}
				name="cardHolderID"
				onChangeText={onChangeText}
				error={errors.cardHolderID}
			/>
			<Input
				lable="Credit Card"
				placeholder="**** **** **** ****"
				value={form.cardNumber}
				name="cardNumber"
				onChangeText={onChangeText}
				keyboardType="number-pad"
				error={errors.cardNumber}
			/>
			<View style={styles.row}>
				<Input
					lable="Expiration Date"
					placeholder="##/##"
					value={form.cardExp}
					name="cardExp"
					onChangeText={onChangeText}
					keyboardType="number-pad"
					error={errors.cardExp}
				/>
				<View style={styles.spacing}></View>
				<Input
					lable="CVV"
					placeholder="***"
					value={form.cardCVV}
					name="cardCVV"
					onChangeText={onChangeText}
					keyboardType="number-pad"
					error={errors.cardCVV}
				/>
			</View>

			<View style={styles.btnContainer}>
				<Button
					title="Order"
					center
					leading={<Feather name="shopping-bag" size={18} color="#fff" />}
					onPress={onOrder}
				/>
			</View>
		</ScrollView>
	)
}

export default CheckoutScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 15
	},
	title: {
		fontSize: 22,
		marginBottom: 15,
		fontWeight: "bold",
		color: Colors.DarkBlue,
		textAlign: "center"
	},
	row: {
		flexDirection: "row",

	},
	spacing: {
		width: 15,
	},
	btnContainer: {
		marginTop: 10,
		paddingBottom: 30
	}
})
