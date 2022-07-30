import {DatumTopAnime} from '../../models/top/topUpcommingAnimes/topUpcommingAnimes';
import {TopUpcommingAnime} from '../../models/top/topUpcommingAnimes/topUpcommingAnimesAddapted';

export const topAnimeUpcommingAddapter = (
  data: DatumTopAnime,
): TopUpcommingAnime => {
  const newData: TopUpcommingAnime = {
    id: data.mal_id,
    imageUrl: data.images.jpg.image_url,
    title: data.title,
    type: data.type,
  };
  return newData;
};
