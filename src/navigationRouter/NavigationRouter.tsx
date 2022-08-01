/* import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, SearchScreen} from '../screens';
const Stack = createNativeStackNavigator();

export const NavigationRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
}; */
/* import React from 'react';
import {HomeScreen} from '../screens';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
export const NavigationRouter = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}; */

import React from 'react';
import {HomeScreen, SearchScreen} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
export const NavigationRouter = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
};
