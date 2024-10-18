import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import React from 'react';
import { statusData } from './database';

const App = () => {

    const RenderHeader = () => {
        return (
            <View style={{ paddingLeft: 20, marginBottom: 20 }}>
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
        )
    }

    return (
        <View style={styles.page}>
            {/* HEADER */}
            <View style={{ marginBottom: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20 }}>
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
            {/* POSTS SECTIONS */}
            <View style={{}}>
                <FlatList
                    data={statusData}
                    ListHeaderComponent={RenderHeader}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ marginBottom: 30, }}>
                                <Image source={{ uri: item.postPicture }} style={{ height: 450, width: '100%', resizeMode: 'cover' }} />
                                <View style={{ position: 'absolute', marginTop: 7, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={styles.profileCtn}>
                                        <Image source={{ uri: item.profilePic }} style={{ height: 40, width: 40, borderRadius: 100, }} />
                                    </View>
                                    <View style={{ marginLeft: 10, flex: 1 }}>
                                        <Text numberOfLines={1} style={{ fontSize: 12, color: '#fffff1', }}>{item.profileName}</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                            <Image source={require('../assets/icons/music.png')} style={{ tintColor: '#fffff1', height: 15, width: 15, }} />
                                            <Text style={{ fontSize: 12, color: '#fffff1' }}>  {item.profileName} - Original audio</Text>
                                        </View>
                                    </View>
                                    <Image source={require('../assets/icons/verticalmenu.png')} style={{ height: 13, width: 13, tintColor: 'white' }} />
                                </View>
                                {/* REACTIONS */}
                                <View style={{ marginTop: 13, }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15 }}>
                                        <TouchableOpacity activeOpacity={0.5} style={{ flexDirection: 'row', alignItems: 'center', marginRight: 13 }}>
                                            <Image source={require('../assets/icons/love.png')} style={{ height: 25, width: 25, }} />
                                            <Text style={{ fontSize: 15, marginLeft: 8, color: 'black' }}>45.5K</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity activeOpacity={0.5} style={{ flexDirection: 'row', alignItems: 'center', marginRight: 13 }}>
                                            <Image source={require('../assets/icons/comment.png')} style={{ height: 25, width: 25, }} />
                                            <Text style={{ fontSize: 15, marginLeft: 8, color: 'black' }}>45.5K</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity activeOpacity={0.5} style={{ flexDirection: 'row', alignItems: 'center', marginRight: 13, flex: 1 }}>
                                            <Image source={require('../assets/icons/send.png')} style={{ height: 25, width: 25, }} />
                                            <Text style={{ fontSize: 15, marginLeft: 8, color: 'black' }}>45.5K</Text>
                                        </TouchableOpacity>
                                        <Image source={require('../assets/icons/bookmark.png')} style={{ height: 25, width: 25, }} />
                                    </View>
                                    <TouchableOpacity activeOpacity={0.5}>
                                        <Text style={{ marginLeft: 20, color: 'grey', fontSize: 12, marginTop: 5, }}>View all comments</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
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
    profileCtn: {
        height: 50,
        width: 50,
        borderRadius: 100,
        borderColor: 'red',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',

    },
    container: {
        height: 500,
        borderWidth: 1,
    },
});