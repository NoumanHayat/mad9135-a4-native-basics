import * as React from 'react';
import { Button, View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// import { DataProvider } from './src/hook/useData';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            {/* <LinearGradient
                // Button Linear Gradient
                colors={['#93ff53', '#5ccc15', '#5ccc15', '#93ff53']}
                style={{ flex: 1 }}
                useAngle={true}
                angle={90}
            > */}
                <View style={{ flex: 1 }}>

                    <Image style={styles.bannerStyle} source={require('./../../assets/banner.jpg')} />
                    <View style={styles.HeaderView}>
                        <Text style={styles.HeaderStyle}>Where Imagination Becomes Reality</Text>
                        <Text style={styles.tetStyle}>We provide best shows for any gender any age.You can see list of most popular and best shows ever</Text>
                    </View>
                    
                    <View>
                        <Text style={{ fontSize: 23, color: 'White',margin:10 }}>Top trending</Text>
                    </View>

                </View>
            {/* </LinearGradient> */}
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

    }
});