import React, { useContext, useEffect, useState } from 'react';
import { Button, View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {detailsStyles} from './../style';
export default function Screen(props) {
    console.log(props.route.params);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View style={{ flex: 1 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={detailsStyles.imageStyle} source={{uri:props.route.params._embedded.show.image.medium}} />
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{ fontSize: 23 }}>{props.route.params._embedded.show.name}</Text>
                </View>
                <View style={{  marginTop: 20 }}>
                    
                    <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>
                        <View style={detailsStyles.items}>
                            <Text style={detailsStyles.itemsText}>type:{props.route.params._embedded.show.type}</Text>
                        </View>
                        <View style={detailsStyles.items}> 
                            <Text style={detailsStyles.itemsText}>language:{props.route.params._embedded.show.language}</Text>
                        </View>
                    </View>

                    <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>
                        <View style={detailsStyles.items}>
                            <Text style={detailsStyles.itemsText}>status:{props.route.params._embedded.show.status}</Text>
                        </View>
                        <View style={detailsStyles.items}> 
                            <Text style={detailsStyles.itemsText}>runtime:{props.route.params._embedded.show.runtime}</Text>
                        </View>
                    </View>

                    <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>
                        <View style={detailsStyles.items}>
                            <Text style={detailsStyles.itemsText}>premiered:{props.route.params._embedded.show.premiered}</Text>
                        </View>
                        <View style={detailsStyles.items}> 
                            <Text style={detailsStyles.itemsText}>end:{props.route.params._embedded.show.end?"Yes":"No"}</Text>
                        </View>
                    </View>


                </View>
            </View>
        </SafeAreaView>
    )
};
