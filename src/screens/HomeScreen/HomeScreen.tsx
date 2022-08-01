import React, {createContext, useState, useEffect, useCallback} from 'react';
import {topUpcommingsAddapter} from '../../addapters/top/topUpcommingsAddapter';
import {TopUpcommingAnimesAddapted} from '../../models/top/topUpcommingAnimes/topUpcommingAnimesAddapted';
import {getTopAnime} from '../../services/top';
import {Home} from './Home';

type HomeScreenTypes = {
  upcommingAnimes: UpcommingAnimesProps;
  airingAnimes: AiringAnimesProps;
  popularAnimes: PopularAnimesProps;
};
export const HomeScreenContext = createContext({} as HomeScreenTypes);

interface UpcommingAnimesProps {
  isLoading: boolean;
  upconmmingAnimes: TopUpcommingAnimesAddapted;
}
interface AiringAnimesProps {
  isLoading: boolean;
  airingAnimes: TopUpcommingAnimesAddapted;
}
interface PopularAnimesProps {
  isLoading: boolean;
  popularAnimes: TopUpcommingAnimesAddapted;
}

export const HomeScreen = () => {
  const [upcommingAnimes, setUpcommingAnimes] = useState<UpcommingAnimesProps>({
    isLoading: true,
    upconmmingAnimes: [],
  });
  const [airingAnimes, setAiringAnimes] = useState<AiringAnimesProps>({
    isLoading: true,
    airingAnimes: [],
  });
  const [popularAnimes, setPopularAnimes] = useState<PopularAnimesProps>({
    isLoading: true,
    popularAnimes: [],
  });
  const getUpcommingAnimes = useCallback(
    async (controller: AbortController) => {
      const upconmmingAnimesResponse = await getTopAnime(
        controller,
        1,
        15,
        'upcoming',
      );
      if (
        upconmmingAnimesResponse.status !== 200 ||
        !upconmmingAnimesResponse.data
      ) {
        return {
          upconmmingAnimes: [],
        };
      }
      const upcommingAnimesAddapted = topUpcommingsAddapter(
        upconmmingAnimesResponse.data,
      );
      return {
        upconmmingAnimes: upcommingAnimesAddapted,
      };
    },
    [],
  );

  const getPopularAnimes = useCallback(async (controller: AbortController) => {
    const popularAnimesResponse = await getTopAnime(
      controller,
      1,
      15,
      'bypopularity',
    );
    if (popularAnimesResponse.status !== 200 || !popularAnimesResponse.data) {
      return {
        popularAnimes: [],
      };
    }
    const popularAnimesAddapted = topUpcommingsAddapter(
      popularAnimesResponse.data,
    );

    return {
      popularAnimes: popularAnimesAddapted,
    };
  }, []);

  const getAiringAnimes = useCallback(async (controller: AbortController) => {
    const airingAnimesResponse = await getTopAnime(controller, 1, 15, 'airing');
    if (airingAnimesResponse.status !== 200 || !airingAnimesResponse.data) {
      return {
        airingAnimes: [],
      };
    }
    const airingAnimesAddapted = topUpcommingsAddapter(
      airingAnimesResponse.data,
    );

    return {
      airingAnimes: airingAnimesAddapted,
    };
  }, []);
  const dataController = useCallback(
    async (controller: AbortController) => {
      const airingAnimesCleaned = await getAiringAnimes(controller);

      const upcommingAnimesCleaned = await getUpcommingAnimes(controller);

      const popularAnimesCleaned = await getPopularAnimes(controller);

      setAiringAnimes({
        isLoading: false,
        ...airingAnimesCleaned,
      });
      setUpcommingAnimes({
        isLoading: false,
        ...upcommingAnimesCleaned,
      });
      setPopularAnimes({
        isLoading: false,
        ...popularAnimesCleaned,
      });
    },
    [getAiringAnimes, getPopularAnimes, getUpcommingAnimes],
  );
  useEffect(() => {
    const controller = new AbortController();

    if (
      airingAnimes.isLoading &&
      upcommingAnimes.isLoading &&
      popularAnimes.isLoading
    ) {
      dataController(controller);
    }

    return () => {
      controller.abort();
    };
  }, [
    airingAnimes.isLoading,
    dataController,
    popularAnimes.isLoading,
    upcommingAnimes.isLoading,
  ]);
  return (
    <HomeScreenContext.Provider
      value={{
        upcommingAnimes,
        airingAnimes,
        popularAnimes,
      }}>
      <Home />
    </HomeScreenContext.Provider>
  );
};
