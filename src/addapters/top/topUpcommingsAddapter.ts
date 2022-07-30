import {TopUpCommingAnimesData} from '../../models/top/topUpcommingAnimes/topUpcommingAnimes';
import {TopUpcommingAnimesAddapted} from '../../models/top/topUpcommingAnimes/topUpcommingAnimesAddapted';
import {topAnimeUpcommingAddapter} from './topAnimeUpcommingAddapter';

export const topUpcommingsAddapter = (data: TopUpCommingAnimesData) => {
  const newData: TopUpcommingAnimesAddapted = [];
  for (const upcommingAnime of data.data) {
    newData.push(topAnimeUpcommingAddapter(upcommingAnime));
  }
  return newData;
};
