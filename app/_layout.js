import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const _layout = () => {
    const listData = [
        {
            alphabet: "A",
            description: "Apple",
        }, {
            alphabet: "B",
            description: "Ball",
        }, {
            alphabet: "C",
            description: "Cat",
        },
    ];
    return (
        <View style={styles.page}>
            <Text style={{ fontSize: 30, color: "black", fontWeight: "bold" }}>FlatList Class</Text>
            <FlatList
                data={listData}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>{item.alphabet} for {item.description}</Text>
                        </View>
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
})