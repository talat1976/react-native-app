import React, { FC, useMemo } from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList, Pages } from '../tools/types'
import ProductView from '../components/ProductView'
import { useStore } from '../context/StoreContext'

type Props = StackScreenProps<RootStackParamList, Pages.ProductList>

const ProductListScreen: FC<Props> = (props) => {
    const { route } = props
    const { selector } = useStore()

    const products = useMemo(() => selector.getProductsByCategory(route.params.type), [route.params.type])

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={products}
                renderItem={({ item }) => <ProductView product={item} />}
                keyExtractor={product => product.id}
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
