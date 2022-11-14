import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  SafeAreaView,
  SectionList,
  ScrollView,
} from 'react-native';
import {TopUpcommingAnime} from '../../models/top/topUpcommingAnimes/topUpcommingAnimesAddapted';
import {AnimeSliderCard} from './AnimeSliderCard';

interface SimpleFlatListProps {
  data: TopUpcommingAnime[];
  title: string;
  isLoading: boolean;
  horizontal?: boolean;
}
const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
    padding: 0,
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000000',
    marginVertical: 10,
    marginBottom: 0,
  },
});
export const SimpleFlatList = ({
  isLoading,
  data,
  title,
  horizontal = false,
}: SimpleFlatListProps) => {
  if (isLoading) {
    return <Text>Cargando ...</Text>;
  }
  return (
    <ScrollView horizontal={true}>
      <SafeAreaView style={styles.flatListContainer}>
        <SectionList
          stickySectionHeadersEnabled={false}
          sections={[{data: data}]}
          renderSectionHeader={({section}) => (
            <>
              {title && <Text style={styles.sectionHeader}>{title}</Text>}
              {horizontal && (
                <FlatList
                  data={section.data}
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
              )}
            </>
          )}
          renderItem={({item}) => {
            if (horizontal) {
              return null;
            }
            return (
              <AnimeSliderCard
                id={item.id}
                title={item.title}
                imageUrl={item.imageUrl}
                horizontal={false}
              />
            );
          }}
        />
      </SafeAreaView>
    </ScrollView>
  );
};
