import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { listData } from './database'

const _layout = () => {

    return (
        <View style={styles.page}>
            <Text style={{ fontSize: 30, color: "black", fontWeight: "bold", marginBottom: 20 }}>FlatList Class</Text>
            <FlatList
                data={listData}
                horizontal={true}
                // numColumns={3}
                // columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity activeOpacity={0.7} style={[styles.container, { backgroundColor: item.bg }]}>
                            <Text style={{ fontSize: 13, color: "white", fontWeight: 'bold' }}>{item.alphabet} for {item.description}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default _layout

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    container: {
        height: 95,
        width: 95,
        backgroundColor: 'blue',
        marginBottom: 10,
        marginRight: 20,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
})