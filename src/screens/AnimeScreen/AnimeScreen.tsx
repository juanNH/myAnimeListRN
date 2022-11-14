import React, {createContext, useCallback, useEffect, useState} from 'react';
import {Anime} from './Anime';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../models/screens/paramsTypes';
import {getAnimeById} from '../../services/animes/getAnimeById';
import {animeByIdAddapter} from '../../addapters/animesFilter/animeByIdAddapter';
import {AnimeByIdAddapted} from '../../models/animes/AnimeByIdAddapted';
type AnimeScreenTypes = {
  anime: AnimeProps;
};

export const AnimeScreenContext = createContext({} as AnimeScreenTypes);
interface AnimeProps {
  isLoading: boolean;
  isError: boolean;
  anime?: AnimeByIdAddapted;
}

export const AnimeScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Anime'>>();
  const {id} = route.params;
  const [isMount, setIsMount] = useState(false);
  const [anime, setAnime] = useState<AnimeProps>({
    isLoading: true,
    isError: false,
  });
  const animeData = useCallback(async () => {
    const animeResponse = await getAnimeById(id);
    if (animeResponse.status === 200 && animeResponse.data) {
      const animeAddapted = animeByIdAddapter(animeResponse.data);
      return {
        isError: false,
        anime: animeAddapted,
      };
    }
    return {
      isError: true,
    };
  }, [id]);
  const dataController = useCallback(async () => {
    const animeDataClean = await animeData();
    setAnime({
      ...animeDataClean,
      isLoading: false,
    });
    setIsMount(true);
  }, [animeData]);
  useEffect(() => {
    if (!isMount) {
      dataController();
    }
  }, [dataController, isMount]);
  return (
    <AnimeScreenContext.Provider
      value={{
        anime,
      }}>
      <Anime />
    </AnimeScreenContext.Provider>
  );
};
