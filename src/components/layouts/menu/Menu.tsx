import React, {RefObject} from 'react';
import {Button, DrawerLayoutAndroid, Text, View} from 'react-native';

interface MenuProps {
  drawer: RefObject<DrawerLayoutAndroid>;
}

export const Menu = ({drawer}: MenuProps) => {
  return (
    <View>
      <Text style={{color: 'red'}}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current?.closeDrawer()}
      />
    </View>
  );
};
