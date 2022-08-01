import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {SimpleFlatList} from '../../../components/commons';
import {HomeScreenContext} from '../HomeScreen';
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
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
      />
      <SimpleFlatList
        data={upcommingAnimes.upconmmingAnimes}
        title={'Top animes proximos'}
        isLoading={upcommingAnimes.isLoading}
      />
      <SimpleFlatList
        data={popularAnimes.popularAnimes}
        title={'Top animes'}
        isLoading={popularAnimes.isLoading}
      />
    </View>
  );
};
