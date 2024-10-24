import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const _layout = () => {

    const student = ['Abraham', 'Abiodun'];

    return (
        <View style={styles.page}>
            <Text style={{ fontSize: 35, color: "black", fontWeight: 'bold' }}>FlatList Class</Text>
        </View>
    )
}

export default _layout

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingHorizontal: 20,
        paddingTop: 10,
    },
})