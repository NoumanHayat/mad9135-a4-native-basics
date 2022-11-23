import  React,{useContext} from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DataProvider,DataContext } from './src/hook/useData';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './src/screen/Home';
import DataScreen from './src/screen/DataScreen';
const Drawer = createDrawerNavigator();

function AppStarting() {
  const {getDetails} = useContext(DataContext);

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