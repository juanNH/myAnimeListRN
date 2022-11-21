import React, {useContext} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {AnimeScreenContext} from './AnimeScreen';
import {AnimeStats} from './animeStats/AnimeStats';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
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
    <ScrollView style={styles.container}>
      <AnimeStats
        title={anime.anime?.title || ''}
        rank={anime.anime?.rank || 0}
        urlAnime={anime.anime?.urlImage || ''}
        favorites={anime.anime?.favorites || 0}
        score={anime.anime?.score || 0}
        type={anime.anime?.type || ''}
        episodes={anime.anime?.episodes || 0}
        synopsis={anime.anime?.synopsis || ''}
      />
    </ScrollView>
  );
};
