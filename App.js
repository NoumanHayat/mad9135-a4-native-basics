import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DataProvider } from './src/hook/useData';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './src/screen/DataScreen';
import DataScreen from './src/screen/DataScreen';

const Drawer = createDrawerNavigator();

function AppStarting() {
  return (
    <NavigationContainer>
      <Drawer.Navigator  screenOptions={{
              headerShown: false,
            }}
            >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Data Screen" component={DataScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <DataProvider>
      <AppStarting />
    </DataProvider>
  );
}