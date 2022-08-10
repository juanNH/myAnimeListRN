import React, {RefObject, useContext} from 'react';
import {
  DrawerLayoutAndroid,
  Pressable,
  StyleSheet,
  Text,
  ScrollView,
  View,
} from 'react-native';
import {PickerOptions} from '../../../components/commons';
import {StatusOptions, TypesOptions} from '../Data';
import {SearchScreenContext} from '../SearchScreen';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

interface FilterMenuProps {
  drawer: RefObject<DrawerLayoutAndroid>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*  justifyContent: 'center', */
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,1)',
    padding: 32,
  },
  containers: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
export const FilterMenu = ({/* isVisible, */ drawer}: FilterMenuProps) => {
  const {
    animeType,
    animeStatus,
    rating,
    ratingRange,
    genders,
    gender,
    handleStatusChange,
    handleTypeChange,
    handleChangeRatingRange,
    handleChangeRating,
    handleGenderChange,
  } = useContext(SearchScreenContext);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Pressable onPress={() => drawer.current?.closeDrawer()}>
          <Text>Hide Modal</Text>
        </Pressable>
        <PickerOptions
          label="Anime type"
          items={TypesOptions}
          action={handleTypeChange}
          value={animeType}
        />
        <PickerOptions
          label="Anime status"
          items={StatusOptions}
          action={handleStatusChange}
          value={animeStatus}
        />
        <PickerOptions
          label="Genres"
          value={gender}
          items={genders.genders.map(genderInArray => {
            return {
              label: genderInArray.name,
              value: `${genderInArray.id}`,
            };
          })}
          action={handleGenderChange}
        />
        <View style={styles.containers}>
          <Text>
            min:{ratingRange[0]} - max:{ratingRange[1]}
          </Text>

          <MultiSlider
            values={ratingRange}
            onValuesChange={values => handleChangeRatingRange(values)}
            max={10}
            min={1}
          />
          <Text>Score: {rating[0]}</Text>
          <MultiSlider
            values={rating}
            onValuesChange={values => handleChangeRating(values)}
            max={10}
            min={1}
          />
        </View>
      </View>
    </ScrollView>
  );
};
