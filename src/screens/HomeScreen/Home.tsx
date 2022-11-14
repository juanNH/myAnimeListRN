import React from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
import {AnimeListsContainer} from './animeListsContainer/AnimeListsContainer';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export const Home = () => {
  return (
    <ScrollView nestedScrollEnabled={true} style={styles.container}>
      <Text>HomeVisew</Text>
      <AnimeListsContainer />
    </ScrollView>
  );
};
