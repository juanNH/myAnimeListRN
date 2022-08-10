import {GendersResponse} from '../../models/genders/genders';
import {Genders} from '../../models/genders/gendersAddapted';

export const gendersAddapters = (genders: GendersResponse): Genders[] => {
  let newData: Genders[] = [];

  for (const gender of genders.data) {
    newData.push({
      id: gender.mal_id,
      name: gender.name,
      count: gender.count,
    });
  }

  return newData;
};
