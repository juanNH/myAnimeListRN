import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../models/screens/paramsTypes';
interface AnimeSliderCardProps {
  id: number;
  title: string;
  imageUrl: string;
  horizontal?: boolean;
}
const styles = StyleSheet.create({
  imageHorizontal: {
    width: 200,
    height: 200,
  },
  imageVertical: {
    width: 300,
    height: 300,
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
  horizontal = true,
}: AnimeSliderCardProps) => {
  const navigation = useNavigation<RootStackParamList>();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('Anime', {
          id: id,
          name: title,
        })
      }>
      <ImageBackground
        style={horizontal ? styles.imageHorizontal : styles.imageVertical}
        source={{uri: imageUrl}}
        resizeMode={'cover'}>
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};
