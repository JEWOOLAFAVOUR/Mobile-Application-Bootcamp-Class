import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const _layout = () => {
    return (
        <View style={styles.page}>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
        </View>
    )
}

export default _layout

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 40,
        paddingHorizontal: 30,
        alignItems: 'flex-end'
    },
    box1: {
        height: 130,
        width: 130,
        backgroundColor: 'blue',
    },
    box2: {
        height: 130,
        width: 130,
        backgroundColor: 'tomato',
        marginTop: 30,
    },
})