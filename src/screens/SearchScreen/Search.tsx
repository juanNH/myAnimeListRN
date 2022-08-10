import React, {useContext, useRef} from 'react';
import {
  TextInput,
  ScrollView,
  StyleSheet,
  View,
  Button,
  DrawerLayoutAndroid,
} from 'react-native';
import {SearchScreenContext} from './SearchScreen';
import {FilterMenu} from './filterMenu/FilterMenu';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    backgroundColor: '#ffffff',
    width: '80%',
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 16,
  },
  mainBox: {
    paddingVertical: 24,
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
});

export const Search = () => {
  const {handleSearchChange, search} = useContext(SearchScreenContext);
  const drawer = useRef<DrawerLayoutAndroid>(null);

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={'right'}
      renderNavigationView={() => <FilterMenu drawer={drawer} />}>
      <ScrollView style={styles.container}>
        <View style={styles.mainBox}>
          <TextInput
            style={styles.search}
            onChangeText={handleSearchChange}
            value={search}
            placeholder="Search Anime"
            keyboardType="default"
            placeholderTextColor={'#000000'}
          />
        </View>
        <Button
          title="Open menu"
          onPress={() => drawer.current?.openDrawer()}
        />
      </ScrollView>
    </DrawerLayoutAndroid>
  );
};
