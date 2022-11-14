import {External} from '../../models/animes/AnimeById';
import {AnimeStreaming} from '../../models/animes/AnimeByIdAddapted';

export const streamingAddapter = (data: External[]): AnimeStreaming[] => {
  const newData: AnimeStreaming[] = [];
  for (const streaming of data) {
    newData.push({
      name: streaming.name,
      url: streaming.url,
    });
  }
  return newData;
};
