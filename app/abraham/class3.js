import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const class3 = () => {
    return (
        <View style={styles.page}>
            <Text>class3</Text>
        </View>
    )
}

export default class3;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingHorizontal: 20,
        paddingTop: 20,
    },
});