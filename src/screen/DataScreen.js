import React, { useContext, useEffect, useState } from 'react';
import { Button, View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// import { DataProvider } from './src/hook/useData';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DataContext } from '../hook/useData';

export default function Screen() {
    const { getDetails } = useContext(DataContext);
    const [data, setData] = useState([]);
    useEffect(() => {
        async function featchData() {
            let a = await getDetails();
            console.log(a[0]._embedded.show.image.medium);
            setData(a.slice(0, 23))
        }
        featchData();
    }, []);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>

            <View style={{ flex: 1 }}>
                <View>
                    <Text style={{ fontSize: 23, color: 'White', margin: 10 }}>Top trending</Text>
                    <FlatList
                        data={data}
                        renderItem={({ item, index, separators }) =>{ 
                            console.log(item._embedded.show.name)
                            return(
                            <TouchableOpacity onPress={() => { alert("ok") }}>
                                <View style={styles.cardView}>
                                    <View >
                                        <Image source={{ uri: item._embedded.show.image.medium }}
                                            style={{ width: 60, height: 60, borderRadius: 30 }} />
                                    </View>
                                    <View style={{ padding: 10 }} >
                                        <Text style={{ fontSize: 17 }}>{item._embedded.show.name}</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 15 }}>type:{item._embedded.show.type}</Text>
                                            <Text style={{ fontSize: 15, marginLeft: 20 }}>status:{item._embedded.show.status}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}}
                        keyExtractor={item => item.id}
                    />
                </View>

            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    bannerStyle: {
        width: '100%', height: '30%', margin: 1, borderRadius: 30,
    },
    HeaderStyle: {
        fontSize: 25,
        // alignSelf: 'center',
    },
    tetStyle: {
        fontSize: 15
    },
    HeaderView: {
        justifyContent: 'center', alignContent: 'center',
        backgroundColor: '#F7F7FE', borderRadius: 30, padding: 10, margin: 10, shadowColor: 'black',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10,
    },
    cardView: {
        // justifyContent: 'center', alignContent: 'center',
        backgroundColor: '#F7F7FE', borderRadius: 30, padding: 10, margin: 10, shadowColor: 'black',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10,
        margin: 10,
        flexDirection: 'row'
    }
});