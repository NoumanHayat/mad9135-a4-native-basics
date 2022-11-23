import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// import { DataProvider } from './src/hook/useData';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen() {
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <LinearGradient
                // Button Linear Gradient
                colors={['#93ff53', '#5ccc15', '#5ccc15', '#93ff53']}
                useAngle={true}
                angle={90}
                style={{ flex: 1 }}
            >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Button onPress={() => navigation.goBack()} title="Go back home" />
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
}