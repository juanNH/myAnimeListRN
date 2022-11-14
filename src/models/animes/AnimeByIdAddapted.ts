import {AnimeGender} from '../genders/gendersAddapted';

export interface AnimeByIdAddapted {
  id: number;
  urlImage: string;
  title: string;
  type: string;
  episodes: number;
  synopsis: string;
  rank: number;
  score: number;
  favorites: number;
  members: number;
  year: number;
  genders: AnimeGender[];
  streaming: AnimeStreaming[];
}
export interface AnimeStreaming {
  name: string;
  url: string;
}
