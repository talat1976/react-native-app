import React, { FC } from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList, Pages } from '../tools/types'
import ProductView from '../components/ProductView'
import { ActionTypes, useStore } from '../context/StoreContext'

type Props = StackScreenProps<RootStackParamList, Pages.ProductList>

const ProductListScreen: FC<Props> = (props) => {
    const { route } = props
    const { state, dispatch } = useStore()

    const onAddToCart = (productId: string) => {
        dispatch({ type: ActionTypes.addToCart, productId })
    }

    console.log(route.params.type)

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={state.products}
                renderItem={({ item }) => <ProductView product={item} onAddToCart={onAddToCart} />}
                keyExtractor={todo => todo.id.toString()}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        //   padding: 15
    },
    list: {
        width: "100%"
    },
    input: {
        width: "100%",
        backgroundColor: '#eee',
        padding: 10,
        marginBottom: 10,
    },

    stats: {
        marginBottom: 10
    }
})

export default ProductListScreen
