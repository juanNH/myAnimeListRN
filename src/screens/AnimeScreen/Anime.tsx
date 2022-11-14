import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {AnimeScreenContext} from './AnimeScreen';

export const Anime = () => {
  const {anime} = useContext(AnimeScreenContext);
  if (anime.isLoading) {
    return (
      <View>
        <Text>Cargando...</Text>
      </View>
    );
  }
  if (anime.isError) {
    return (
      <View>
        <Text>Error!</Text>
      </View>
    );
  }
  return (
    <View>
      <Text>{anime.anime?.title}</Text>
    </View>
  );
};
