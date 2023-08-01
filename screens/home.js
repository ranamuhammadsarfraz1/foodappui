import React from 'react';
import { Text, View } from 'react-native';

const Home = () => {
    return (
        <View style={{ flex: 1, borderWidth: 2, margin: 2 }}>
            <View style={{ flex: 1, }}>
                <View style={{ flex: 1, borderWidth: 2, margin: '5%', flexDirection: 'row' }}>
                    <View style={{ flex: 1, borderWidth: 2, margin: 2 }}></View>
                    <View style={{ flex: 8, borderWidth: 2, margin: 2 }}></View>
                    <View style={{ flex: 1, borderWidth: 2, margin: 2 }}></View>
                </View>
            </View>
            <View style={{ flex: 1, flexDirection:'row' }}>
                <View style={{  justifyContent: 'center', alignItems: 'center' }} >
                    <View style={{ borderWidth: 1, margin: '2%', backgroundColor: '#000', borderRadius: 50, height: 60, width: 60 }}></View>
                    <Text>All</Text>
                </View>
                <View style={{  justifyContent: 'center', alignItems: 'center' }} >
                    <View style={{ borderWidth: 1, margin: '2%', backgroundColor: '#000', borderRadius: 50, height: 60, width: 60 }}></View>
                    <Text>All</Text>
                </View>
                <View style={{  justifyContent: 'center', alignItems: 'center' }} >
                    <View style={{ borderWidth: 1, margin: '2%', backgroundColor: '#000', borderRadius: 50, height: 60, width: 60 }}></View>
                    <Text>All</Text>
                </View>
                <View style={{  justifyContent: 'center', alignItems: 'center' }} >
                    <View style={{ borderWidth: 1, margin: '2%', backgroundColor: '#000', borderRadius: 50, height: 60, width: 60 }}></View>
                    <Text>All</Text>
                </View>
            </View>
            <View style={{ flex: 5, borderWidth: 2, margin: 2 }}></View>
            <View style={{ flex: 1, borderWidth: 2, margin: 2 }}></View>
        </View>
    )
};

export default Home;