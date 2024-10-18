import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const _layout = () => {
    return (
        <View style={styles.page}>
            <Text style={{ fontSize: 20, color: "black", fontWeight: 'bold' }}>React Native Components</Text>
            <Button title='Press me' color={"black"} />
        </View>
    )
}

export default _layout

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 20,
    },
});