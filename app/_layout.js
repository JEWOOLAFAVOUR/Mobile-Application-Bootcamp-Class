import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

const _layout = () => {
    return (
        <View style={styles.page}>
            <Text style={{ fontSize: 20, color: "black", fontWeight: 'bold' }}>React Native Components</Text>
            <Button title='Press me' color={"black"} />

            <Image source={require('../assets/images/abraham.jpg')}
                style={{ height: 200, width: 200, borderRadius: 200 }} />
            <TouchableOpacity>
                <Image source={{ uri: "https://img.freepik.com/premium-photo/god-makes-covenant-with-sarah-sarah-will-have-children-bible-stories_942102-18913.jpg?w=740" }}
                    style={{ height: 200, width: 200, borderRadius: 200 }} />
            </TouchableOpacity>

            <View style={{ height: 40, borderWidth: 1 }}>
                <TextInput
                    placeholder='enter name'
                    style={{ fontSize: 20, color: 'red' }}
                />
            </View>
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