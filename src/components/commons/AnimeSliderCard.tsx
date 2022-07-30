import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

interface AnimeSliderCardProps {
  id: number;
  title: string;
  imageUrl: string;
}
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  container: {
    margin: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgba(255,255,255,1)',
    position: 'absolute',
    left: 5,
    bottom: 5,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});
export const AnimeSliderCard = ({
  id,
  title,
  imageUrl,
}: AnimeSliderCardProps) => {
  console.log(id);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={{uri: imageUrl}}
        resizeMode={'cover'}>
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </View>
  );
};
