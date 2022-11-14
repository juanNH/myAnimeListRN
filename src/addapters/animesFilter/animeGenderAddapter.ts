import {Genre} from '../../models/animes/AnimeById';
import {AnimeGender} from '../../models/genders/gendersAddapted';

export const animeGenderAddapter = (data: Genre[]): AnimeGender[] => {
  let newData: AnimeGender[] = [];
  for (const genre of data) {
    newData.push({
      id: genre.mal_id,
      name: genre.name,
    });
  }
  return newData;
};
