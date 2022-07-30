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
  const getUpcommingAnimes = useCallback(async () => {
    const upconmmingAnimesResponse = await getTopAnime(1, 15, 'upcoming');
    if (
      upconmmingAnimesResponse.status !== 200 ||
      !upconmmingAnimesResponse.data
    ) {
      return setUpcommingAnimes({
        ...upcommingAnimes,
        upconmmingAnimes: [],
        isLoading: false,
      });
    }
    const upcommingAnimesAddapted = topUpcommingsAddapter(
      upconmmingAnimesResponse.data,
    );

    setUpcommingAnimes({
      ...upcommingAnimes,
      upconmmingAnimes: upcommingAnimesAddapted,
      isLoading: false,
    });
  }, [upcommingAnimes]);

  const getPopularAnimes = useCallback(async () => {
    const popularAnimesResponse = await getTopAnime(1, 15, 'bypopularity');
    if (popularAnimesResponse.status !== 200 || !popularAnimesResponse.data) {
      return setPopularAnimes({
        ...upcommingAnimes,
        popularAnimes: [],
        isLoading: false,
      });
    }
    const popularAnimesAddapted = topUpcommingsAddapter(
      popularAnimesResponse.data,
    );

    setPopularAnimes({
      ...upcommingAnimes,
      popularAnimes: popularAnimesAddapted,
      isLoading: false,
    });
  }, [upcommingAnimes]);

  const getAiringAnimes = useCallback(async () => {
    const airingAnimesResponse = await getTopAnime(1, 15, 'airing');
    if (airingAnimesResponse.status !== 200 || !airingAnimesResponse.data) {
      return setAiringAnimes({
        ...airingAnimes,
        airingAnimes: [],
        isLoading: false,
      });
    }
    const airingAnimesAddapted = topUpcommingsAddapter(
      airingAnimesResponse.data,
    );

    setAiringAnimes({
      ...airingAnimes,
      airingAnimes: airingAnimesAddapted,
      isLoading: false,
    });
  }, [airingAnimes]);

  useEffect(() => {
    if (airingAnimes.isLoading) {
      getAiringAnimes();
    }
    if (upcommingAnimes.isLoading) {
      setTimeout(() => {
        getUpcommingAnimes();
      }, 1000);
    }
    if (popularAnimes.isLoading) {
      setTimeout(() => {
        getPopularAnimes();
      }, 1000);
    }

    /* return () => {
  } */
  }, [
    upcommingAnimes,
    getUpcommingAnimes,
    airingAnimes,
    getAiringAnimes,
    popularAnimes,
    getPopularAnimes,
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
