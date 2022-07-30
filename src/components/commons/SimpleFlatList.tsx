import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {TopUpcommingAnime} from '../../models/top/topUpcommingAnimes/topUpcommingAnimesAddapted';
import {AnimeSliderCard} from './AnimeSliderCard';

interface SimpleFlatListProps {
  data: TopUpcommingAnime[];
  title: string;
  isLoading: boolean;
}
const styles = StyleSheet.create({
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000000',
    marginTop: 20,
    marginBottom: 0,
  },
});
export const SimpleFlatList = ({
  isLoading,
  data,
  title,
}: SimpleFlatListProps) => {
  if (isLoading) {
    return <Text>Cargando ...</Text>;
  }
  return (
    <View>
      <Text style={styles.sectionHeader}>{title}</Text>
      <FlatList
        data={data}
        contentContainerStyle={{paddingHorizontal: 10}}
        renderItem={({item}) => (
          <AnimeSliderCard
            id={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
          />
        )}
        horizontal
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
};
