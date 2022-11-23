import React, { useContext, useEffect, useState } from 'react';
import { Button, View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Screen(props) {
    console.log(props.route.params);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View style={{ flex: 1 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={styles.imageStyle} source={{uri:props.route.params._embedded.show.image.medium}} />
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{ fontSize: 23 }}>{props.route.params._embedded.show.name}</Text>
                </View>
                <View style={{  marginTop: 20 }}>
                    
                    <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>
                        <View style={styles.items}>
                            <Text style={styles.itemsText}>type:{props.route.params._embedded.show.type}</Text>
                        </View>
                        <View style={styles.items}> 
                            <Text style={styles.itemsText}>language:{props.route.params._embedded.show.language}</Text>
                        </View>
                    </View>

                    <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>
                        <View style={styles.items}>
                            <Text style={styles.itemsText}>status:{props.route.params._embedded.show.status}</Text>
                        </View>
                        <View style={styles.items}> 
                            <Text style={styles.itemsText}>runtime:{props.route.params._embedded.show.runtime}</Text>
                        </View>
                    </View>

                    <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>
                        <View style={styles.items}>
                            <Text style={styles.itemsText}>premiered:{props.route.params._embedded.show.premiered}</Text>
                        </View>
                        <View style={styles.items}> 
                            <Text style={styles.itemsText}>end:{props.route.params._embedded.show.end?"Yes":"No"}</Text>
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