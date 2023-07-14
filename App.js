import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import Moments from "./src/screens/Moments";
import Settings from "./src/screens/Settings";
import CustomDrawer from "./src/components/CustomDrawer";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: { marginLeft: -25 ,fontSize: 15}
      }}>
        <Drawer.Screen name="Home" component={Home} options={{
          drawerIcon: ({ color }) => (
            <Icon name="home-outline" size={22} color={color}/>
          )
        }}/>
        <Drawer.Screen name="Profile" component={Profile} 
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="person-outline" size={22} color={color}/>
          )
        }}/>
        <Drawer.Screen name="Moments" component={Moments}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="timer-outline" size={22} color={color}/>
          )
        }} />
        <Drawer.Screen name="Settings" component={Settings} 
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="settings-outline" size={22} color={color}/>
          )
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
