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
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabRouter} from './TabRouter';
import {RootStackParamList} from '../models/screens/paramsTypes';
import {AnimeScreen} from '../screens/AnimeScreen/AnimeScreen';
const RootStack = createNativeStackNavigator<RootStackParamList>();

export const NavigationRouter = () => {
  return (
    <>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Base"
          component={TabRouter}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Anime"
          component={AnimeScreen}
          options={({route}) => ({title: route.params.name})}
        />
      </RootStack.Navigator>
    </>
  );
};
