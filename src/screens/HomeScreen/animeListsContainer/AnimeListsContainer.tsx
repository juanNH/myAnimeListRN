import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {SimpleFlatList} from '../../../components/commons';
import {HomeScreenContext} from '../HomeScreen';
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});
export const AnimeListsContainer = () => {
  const {upcommingAnimes, airingAnimes, popularAnimes} =
    useContext(HomeScreenContext);
  return (
    <View style={styles.container}>
      <SimpleFlatList
        data={airingAnimes?.airingAnimes}
        title={'Top animes en emision'}
        isLoading={airingAnimes.isLoading}
        horizontal={true}
      />

      <SimpleFlatList
        data={upcommingAnimes.upconmmingAnimes}
        title={'Top animes proximos'}
        isLoading={upcommingAnimes.isLoading}
        horizontal={true}
      />

      <SimpleFlatList
        data={popularAnimes.popularAnimes}
        title={'Top animes'}
        isLoading={popularAnimes.isLoading}
        horizontal={true}
      />
    </View>
  );
};
