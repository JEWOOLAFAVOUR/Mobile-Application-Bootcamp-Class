import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const _layout = () => {
    return (
        <View style={styles.page}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={styles.box1}></View>
                <View style={styles.box2}></View>
                <View style={styles.box3}></View>
            </View>
        </View>
    );
};

export default _layout

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 50,
        paddingHorizontal: 10,
    },
    box1: {
        height: 300,
        width: 70,
        backgroundColor: 'blue',
    },
    box2: {
        height: 70,
        width: 70,
        backgroundColor: 'tomato',
        // borderRadius: 110,
    },
    box3: {
        height: 70,
        width: 70,
        backgroundColor: 'black',
    },
})