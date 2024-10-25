import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const _layout = () => {
    return (
        <View style={styles.page}>
            <Text>_layout</Text>
        </View>
    )
}

export default _layout

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingHorizontal: 20,
        paddingTop: 20,
    },
});