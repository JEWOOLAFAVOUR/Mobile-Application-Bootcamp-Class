import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const _layout = () => {
    return (
        <View style={styles.page}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ fontSize: 20, color: "red", fontWeight: 'bold' }}>Welcome back!</Text>
                    <Text style={{ fontSize: 15, color: "black" }}>John Abraham</Text>
                </View>
                <Image source={require('../assets/icons/bell.png')}
                    style={{ height: 30, width: 30 }} />
            </View>
        </View>
    )
}

export default _layout

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingHorizontal: 20,
        paddingTop: 60,
    },
});