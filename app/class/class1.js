import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

const App = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', top: 100 }}>
            {/* <TouchableOpacity>
                <Image source={require('../assets/images/jacob.jpg')}
                    style={{ height: 200, width: 200, borderRadius: 200 }} />
            </TouchableOpacity> */}
            <Button title='Submit' color={'green'} />
            <Text style={{ fontSize: 40, color: 'tomato', fontWeight: 'bold' }}>Ja is the most handsome guy in Lautech.</Text>
            <Text>Yusuf is the most handsome guy in Lautech.</Text>
            <Text>Yusuf is the most handsome guy in Lautech.</Text>
            <Text>Yusuf is the most handsome guy in Lautech.</Text>
            <Text>Yusuf is the most handsome guy in Lautech.</Text>
            <Text>Yusuf is the most handsome guy in Lautech.</Text>
        </View>
    )
}

export default App;

const styles = StyleSheet.create({
    jacob: {
        backgroundColor: 'white',
        flex: 1,
    },
    israel: {

    },
    mercy: {

    },
    yusuf: {

    }
});

