import React, {useContext, useRef} from 'react';
import {
  TextInput,
  ScrollView,
  StyleSheet,
  View,
  DrawerLayoutAndroid,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {SearchScreenContext} from './SearchScreen';
import {FilterMenu} from './filterMenu/FilterMenu';
import {OrderByOptions, OrderOptions} from './Data';
import {PickerOptions} from '../../components/commons';
import {SearchSection} from './searchSection/SearchSection';

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
  sortItem: {
    marginVertical: 5,
    marginHorizontal: 10,
    flex: 1,
  },
  sortContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
  },
  mainBox: {
    paddingVertical: 24,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#153066',
    padding: 10,
    width: '50%',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#000',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#ffffff',
  },
});

export const Search = () => {
  const {
    handleSearchChange,
    handleSortChange,
    handleSortByChange,
    sort,
    search,
    sortBy,
    searchAnimes,
  } = useContext(SearchScreenContext);
  const drawer = useRef<DrawerLayoutAndroid>(null);

  return (
    <SafeAreaView style={{flex: 1}}>
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => searchAnimes(1)}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
          <View style={styles.sortContainer}>
            <View style={styles.sortItem}>
              <PickerOptions
                label="Sort By"
                items={OrderByOptions}
                action={handleSortByChange}
                value={sortBy}
              />
            </View>
            <View style={styles.sortItem}>
              <PickerOptions
                label="Order"
                items={OrderOptions}
                action={handleSortChange}
                value={sort}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => drawer.current?.openDrawer()}>
            <Text style={styles.buttonText}>Advance Filters</Text>
          </TouchableOpacity>
          <SearchSection />
        </ScrollView>
      </DrawerLayoutAndroid>
    </SafeAreaView>
  );
};
