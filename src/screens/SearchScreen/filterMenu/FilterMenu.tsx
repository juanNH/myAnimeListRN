import React, {RefObject, useContext} from 'react';
import {
  /* Modal, */ DrawerLayoutAndroid,
  Pressable,
  StyleSheet,
  Text,
  ScrollView,
  View,
} from 'react-native';
import {PickerOptions} from '../../../components/commons';
import {StatusOptions, TypesOptions} from '../Data';
import {SearchScreenContext} from '../SearchScreen';

interface FilterMenuProps {
  drawer: RefObject<DrawerLayoutAndroid>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*  justifyContent: 'center', */
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,1)',
    padding: 32,
  },
});
export const FilterMenu = ({/* isVisible, */ drawer}: FilterMenuProps) => {
  const {animeType, animeStatus, handleStatusChange, handleTypeChange} =
    useContext(SearchScreenContext);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Pressable onPress={() => drawer.current?.closeDrawer()}>
          <Text>Hide Modal</Text>
        </Pressable>
        <PickerOptions
          label="Anime type"
          items={TypesOptions}
          action={handleTypeChange}
          value={animeType}
        />
        <PickerOptions
          label="Anime status"
          items={StatusOptions}
          action={handleStatusChange}
          value={animeStatus}
        />
      </View>
    </ScrollView>
  );
};
