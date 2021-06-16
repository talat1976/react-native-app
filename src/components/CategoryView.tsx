import React, { FC } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Category } from '../models/Category'
import { Fonts } from '../tools/fonts'

type Props = {
    category: Category
    onPress?: () => void
}

const CategoryView: FC<Props> = (props) => {
    const { category, onPress } = props

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.item} onPress={onPress}>
                <Image style={styles.image} source={category.image} />
                <Text style={styles.text}>{category.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CategoryView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        padding: 5,
    },
    item: {
        width: "100%",
        flex: 1,
        backgroundColor: "#fff",
        elevation: 1,
        borderRadius: 5
    },
    image: {
        width: "100%",
        height: "100%",
        flex: 1
    },
    text: {
        textAlign: "center",
        padding: 8,
        fontSize: 16,
        fontFamily: Fonts.SemiBold
    }
})
