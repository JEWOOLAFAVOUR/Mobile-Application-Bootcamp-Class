import { StyleSheet, Text, View } from 'react-native'
<<<<<<< HEAD
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
=======
import React from 'react'

const class3 = () => {
    return (
        <View>
            <Text>class3</Text>
>>>>>>> 52fa839d3fd7fad76efe10af7f6af485374ea033
        </View>
    )
}

<<<<<<< HEAD
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
=======
export default class3

const styles = StyleSheet.create({})
>>>>>>> 52fa839d3fd7fad76efe10af7f6af485374ea033
