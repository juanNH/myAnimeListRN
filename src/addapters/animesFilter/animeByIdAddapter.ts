import {AnimeById} from '../../models/animes/AnimeById';
import {AnimeByIdAddapted} from '../../models/animes/AnimeByIdAddapted';
import {animeGenderAddapter} from './animeGenderAddapter';
import {streamingAddapter} from './streamingAddapter';

export const animeByIdAddapter = (data: AnimeById): AnimeByIdAddapted => {
  return {
    id: data.data.mal_id,
    urlImage: data.data.images.jpg.image_url,
    title: data.data.title,
    type: data.data.type,
    episodes: data.data.episodes,
    synopsis: data.data.synopsis,
    rank: data.data.rank,
    score: data.data.score,
    favorites: data.data.favorites,
    members: data.data.members,
    year: data.data.year,
    genders: animeGenderAddapter(data.data.genres),
    streaming: streamingAddapter(data.data.streaming),
  };
};
