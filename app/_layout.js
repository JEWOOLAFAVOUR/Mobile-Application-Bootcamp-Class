import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';

const App = () => {
    return (
        <View style={styles.page}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                    <Text style={{ fontSize: 22, color: 'black', fontWeight: 'bold' }}>Instagram</Text>
                    <Image source={require('../assets/icons/arrowdown.png')} style={{ height: 10, width: 10, marginLeft: 8 }} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/icons/love.png')} style={{ height: 20, width: 20, marginRight: 20 }} />
                        <View style={{ height: 5, width: 5, backgroundColor: 'red', borderRadius: 100, }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/icons/messenger.png')} style={{ height: 20, width: 20 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
};

export default App;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 35,
    },
});