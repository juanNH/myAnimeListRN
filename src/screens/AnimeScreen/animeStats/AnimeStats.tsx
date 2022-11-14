import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

interface AnimeStatsProps {
  _title: string;
  urlAnime: string;
  rank: number;
  favorites: number;
  score: number;
  type: string;
  episodes: number;
}
const win = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topDataContainer: {
    flexDirection: 'row',
  },
  textContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
  image: {
    justifyContent: 'center',
    width: win.width / 1.5,
    height: win.height / 2,
  },
  dataText: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  infoText: {
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
  },
});
export const AnimeStats = ({
  _title,
  urlAnime,
  rank,
  favorites,
  score,
  type,
  episodes,
}: AnimeStatsProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.topDataContainer}>
        <Image style={styles.image} source={{uri: urlAnime}} />
        <View style={styles.textContainer}>
          <Text style={styles.dataText}>
            Score{'\n'}
            <Text style={styles.infoText}>{score}</Text>
          </Text>
          <Text style={styles.dataText}>
            Rank:{'\n'}
            <Text style={styles.infoText}>#{rank}</Text>
          </Text>
          <Text style={styles.dataText}>
            Favorites:{'\n'}
            <Text style={styles.infoText}>{favorites}</Text>
          </Text>
          <Text style={styles.dataText}>
            Type:{'\n'}
            <Text style={styles.infoText}>{type}</Text>
          </Text>
          <Text style={styles.dataText}>
            Numbers of episodes:{'\n'}
            <Text style={styles.infoText}>{episodes}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};
