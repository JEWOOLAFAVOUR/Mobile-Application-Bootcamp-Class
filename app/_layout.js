import { StyleSheet, Text, View, Image, TextInput, FlatList, ScrollView } from 'react-native'
import React from 'react'

const _layout = () => {

    const listData = ['All', "Men's", 'Women', "Children"]

    const fashionData = [
        {
            id: 1,
            title: "Men T-Shirt",
            price: "233",
            img: "https://img.freepik.com/premium-photo/elegant-asian-woman-posing-luxury-fashion_705284-59128.jpg?semt=ais_hybrid"
        }, {
            id: 2,
            title: "Women wears",
            price: "480",
            img: "https://img.freepik.com/premium-photo/model-with-hang-bag-png_946288-32999.jpg?semt=ais_hybrid"
        }, {
            id: 3,
            title: "Men T-Shirt",
            price: "233",
            img: "https://img.freepik.com/premium-photo/elegant-asian-woman-posing-luxury-fashion_705284-59128.jpg?semt=ais_hybrid"
        }, {
            id: 4,
            title: "Women wears",
            price: "480",
            img: "https://img.freepik.com/premium-photo/model-with-hang-bag-png_946288-32999.jpg?semt=ais_hybrid"
        }, {
            id: 5,
            title: "Men T-Shirt",
            price: "233",
            img: "https://img.freepik.com/premium-photo/elegant-asian-woman-posing-luxury-fashion_705284-59128.jpg?semt=ais_hybrid"
        }, {
            id: 6,
            title: "Women wears",
            price: "480",
            img: "https://img.freepik.com/premium-photo/model-with-hang-bag-png_946288-32999.jpg?semt=ais_hybrid"
        },
    ]

    const RenderHeader = () => {
        return (
            <View>
                {/* BANNER */}
                <View style={{ marginTop: 20 }}>
                    <Image source={require('../assets/images/banner.jpg')}
                        style={{ height: 220, width: '100%', borderRadius: 10 }} />
                </View>
                {/* SMALLER LISTS */}
                <View style={{ marginVertical: 20 }}>
                    <FlatList
                        data={listData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.roundCtn}>
                                    <Text>{item}</Text>
                                </View>
                            )
                        }}
                    />
                </View>
                {/* PRODUCT LISTS */}
                <View>
                    <FlatList
                        data={fashionData}
                        numColumns={2}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.fashionCtn}>
                                    <Image source={{ uri: item.img }}
                                        style={{ height: 150, width: '100%', borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                                    />
                                    <View style={{ marginTop: 10, marginHorizontal: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 15, color: "black", fontWeight: 'bold' }}>{item.title}</Text>
                                        <Text style={{ fontSize: 15, color: "orange", fontWeight: 'bold' }}>{item.price}</Text>
                                    </View>
                                </View>
                            )
                        }}
                    />
                </View>
            </View>
        )
    }


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
            {/* TEXTINPUT */}
            <View style={styles.container}>
                <Image source={require('../assets/icons/search.png')}
                    style={{ height: 22, width: 22, }} />
                <TextInput
                    placeholder='search'
                    style={{ marginLeft: 10, fontSize: 17, color: "black", flex: 1 }}
                />
                <Image source={require('../assets/icons/mic.png')}
                    style={{ height: 22, width: 22, }} />
            </View>
            <FlatList
                data={['']}
                ListHeaderComponent={RenderHeader}
                showsVerticalScrollIndicator={false}
            // renderItem={({ item }) => <Text>helo</Text>}
            // ListFooterComponent={RenderHeader}
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
        paddingTop: 60,
    },
    container: {
        height: 50,
        borderWidth: 1,
        marginTop: 20,
        borderRadius: 8,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    roundCtn: {
        paddingHorizontal: 20,
        borderWidth: 0.6,
        paddingVertical: 7,
        borderRadius: 30,
        marginRight: 15,
        backgroundColor: "#f8f8f8"
    },
    fashionCtn: {
        height: 200,
        width: '48%',
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 5,
    },
});