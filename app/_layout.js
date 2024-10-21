import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'

const _layout = () => {

    let [name, setName] = useState(0)

    // let name = 'Jacobian'

    return (
        <View style={styles.page}>
            <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold' }}>State Management Class</Text>

            <View style={{ marginTop: 20, marginBottom: 40 }}>
                <Text style={{ fontSize: 16, color: "#000" }}>My name is {name}.</Text>
                <Text style={{ fontSize: 16, color: "#000" }}>My name is {name}.</Text>
                <Text style={{ fontSize: 16, color: "#000" }}>My name is {name}.</Text>
                <Text style={{ fontSize: 16, color: "#000" }}>My name is {name}.</Text>
                <Text style={{ fontSize: 16, color: "#000" }}>My name is {name}.</Text>
                <Text style={{ fontSize: 16, color: "#000" }}>My name is {name}.</Text>
                <Text style={{ fontSize: 16, color: "#000" }}>My name is {name}.</Text>
                <Text style={{ fontSize: 16, color: "#000" }}>My name is {name}.</Text>
                <Text style={{ fontSize: 16, color: "#000" }}>My name is {name}.</Text>
                <Text style={{ fontSize: 16, color: "#000" }}>My name is {name}.</Text>
            </View>
            <TouchableOpacity onPress={() => setName(name + 1)} style={styles.container}>
                <Text style={{ fontSize: 14, color: 'white', }}>Click Me</Text>
            </TouchableOpacity>
        </View>
    )
}

export default _layout

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    container: {
        height: 50,
        backgroundColor: "blue",
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: "center",
    },
});