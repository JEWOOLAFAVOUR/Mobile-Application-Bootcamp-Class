import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { listData } from './database'

const _layout = () => {

    return (
        <View style={styles.page}>
            <Text style={{ fontSize: 30, color: "black", fontWeight: "bold", marginBottom: 20 }}>FlatList Class</Text>
            <FlatList
                data={listData}
                showsVerticalScrollIndicator={false}
                // horizontal={true}
                // numColumns={3}
                // columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity activeOpacity={0.7} style={[styles.container, { backgroundColor: item.bg }]}>
                            <Image
                                source={{ uri: item.img }}
                                style={{ height: 90, width: 90, }}
                            />
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
        height: 120,
        // width: 95,
        backgroundColor: 'blue',
        marginBottom: 10,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
})