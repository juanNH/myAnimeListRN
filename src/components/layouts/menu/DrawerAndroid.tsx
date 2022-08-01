import React, {/* ReactNode, */ useRef} from 'react';
import {Button, DrawerLayoutAndroid, Text, View} from 'react-native';
import {Menu} from './Menu';

interface DrawerAndroidProps {
  drawerPosition: 'left' | 'right';
}

export const DrawerAndroid = ({drawerPosition}: DrawerAndroidProps) => {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  return (
    <DrawerLayoutAndroid
      style={{backgroundColor: 'red'}}
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={() => <Menu drawer={drawer} />}>
      <View>
        <Text style={{color: 'red'}}>Drawer on the</Text>
        <Button
          title="Open drawer"
          onPress={() => drawer.current?.openDrawer()}
        />
      </View>
    </DrawerLayoutAndroid>
  );
};
