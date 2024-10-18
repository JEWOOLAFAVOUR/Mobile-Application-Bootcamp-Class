import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { statusData } from './database';

const App = () => {
    return (
        <View style={styles.page}>
            {/* HEADER */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                    <Text style={{ fontSize: 22, color: 'black', fontWeight: 'bold' }}>Instagram</Text>
                    <Image source={require('../assets/icons/arrowdown.png')} style={{ height: 10, width: 10, marginLeft: 8 }} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/icons/love.png')} style={{ height: 20, width: 20, marginRight: 20 }} />
                        <View style={{
                            height: 7, width: 7, backgroundColor: 'red',
                            borderRadius: 100, position: 'absolute', right: 20
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/icons/messenger.png')} style={{ height: 20, width: 20 }} />
                        <View style={{ position: 'absolute', top: -11, right: -10, height: 19, width: 19, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', borderRadius: 100, }}>
                            <Text style={{ fontSize: 10, color: 'white' }}>6</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {/* STATUS SLIDES */}
            <View style={{ paddingLeft: 20, marginTop: 20, }}>
                <FlatList
                    data={statusData}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={{ alignItems: 'center', marginRight: 15, }}>
                                <View style={[styles.statusCircle, { borderWidth: item.id === 1 ? 0 : 3 }]}>
                                    <Image source={{ uri: item.profilePic }} style={{ height: 79, width: 79, borderRadius: 100, resizeMode: 'cover' }} />
                                </View>
                                <Text style={{ fontSize: 12, color: 'black', marginTop: 4 }}>{item.name}</Text>
                                {item.id === 1 ?
                                    <View style={styles.plusIcon}>
                                        <Text style={{ fontSize: 14, color: "white", fontWeight: 'bold' }}>+</Text>
                                    </View>
                                    :
                                    null
                                }
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 35,
    },
    statusCircle: {
        height: 90,
        width: 90,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: "pink",
        justifyContent: 'center',
        alignItems: 'center',
    },
    plusIcon: {
        height: 25,
        width: 25,
        backgroundColor: 'skyblue',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 30,
        right: 0,
        borderWidth: 2,
        borderColor: 'white'
    },
});