import React, { useContext, useEffect, useState } from 'react';
import { Button, View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Screen() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View style={{ flex: 1 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={styles.imageStyle} source={require('./../../assets/banner.jpg')} />
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{ fontSize: 23 }}>name</Text>
                </View>
                <View style={{  marginTop: 20 }}>
                    
                    <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>
                        <View style={styles.items}>
                            <Text style={styles.itemsText}>type:Variety</Text>
                        </View>
                        <View style={styles.items}> 
                            <Text style={styles.itemsText}>language:English</Text>
                        </View>
                    </View>

                    <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>
                        <View style={styles.items}>
                            <Text style={styles.itemsText}>status:Running</Text>
                        </View>
                        <View style={styles.items}> 
                            <Text style={styles.itemsText}>runtime:30</Text>
                        </View>
                    </View>

                    <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>
                        <View style={styles.items}>
                            <Text style={styles.itemsText}>premiered:2021-05-09</Text>
                        </View>
                        <View style={styles.items}> 
                            <Text style={styles.itemsText}>end:null</Text>
                        </View>
                    </View>


                </View>
            </View>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    imageStyle: {
        width: 300,
        height: 300,
        borderRadius: 360
    },
    items:{
        margin:20
    },
    itemsText:{
        fontSize:15
    }
});