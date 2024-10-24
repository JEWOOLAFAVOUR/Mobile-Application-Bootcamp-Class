import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'

const _layout = () => {

    // const student = ['Abraham', 'Abiodun', "Joy", "Adedamola", "Victor", "Adeyemo"];

    // Array of students

    const studentData = [
        {
            id: 1,
            name: "Abraham",
            numberOfMessage: 2,
            message: "How are you?",
            avatar: "https://img.freepik.com/free-photo/young-cheerful-african-boy-leather-jacket-standing-with-crossed-hands-looking_171337-1302.jpg?t=st=1729788791~exp=1729792391~hmac=a547dbfa3c061eb0b1fe78fe7f95042971ee41b739f812fd112e9a5bb15b6cba&w=360",
        }, {
            id: 2,
            name: "John",
            numberOfMessage: 3,
            message: "Tinubu dey show us alot oo and it is suprising cool and nice",
            avatar: "https://img.freepik.com/free-photo/young-cheerful-african-boy-leather-jacket-standing-with-crossed-hands-looking_171337-1302.jpg?t=st=1729788791~exp=1729792391~hmac=a547dbfa3c061eb0b1fe78fe7f95042971ee41b739f812fd112e9a5bb15b6cba&w=360",
        },
    ]



    return (
        <View style={styles.page}>
            <Text style={{ fontSize: 35, color: "black", fontWeight: 'bold' }}>FlatList Class</Text>

            <FlatList
                data={studentData}
                // horizontal={true}
                // numColumns={3}
                // columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <Image source={{ uri: item.avatar }} style={{ height: 40, width: 40, borderRadius: 40 }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={{ fontSize: 15, color: 'black', fontWeight: 'Bold' }}>{item.name}</Text>
                                <Text numberOfLines={1} style={{ fontSize: 14, color: 'black' }}>{item.message}</Text>
                            </View>
                            <View style={styles.roundCtn}>
                                <Text style={{ fontSize: 10, color: 'white' }}>{item.numberOfMessage}</Text>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default _layout

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        // flex: 1,
    },
    roundCtn: {
        height: 30,
        width: 30,
        backgroundColor: 'blue',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
})