import React, {createContext, useCallback, useEffect, useState} from 'react';
import {animeFilterAddapter} from '../../addapters/animesFilter';
import {SEARCH_PAGINATION} from '../../constants/paginations';
import {useGenders} from '../../hooks';
import {
  useSearchAnime,
  useAnimeType,
  useAnimeStatus,
  useMultiSlider,
  useSimpleSlider,
  useSortOptions,
  useSortByOptions,
} from '../../hooks/filters';
import {AnimesAddapted} from '../../models/animes/AnimesAddapted';
import {Genders} from '../../models/genders/gendersAddapted';
import {
  Order,
  OrderBy,
  Status,
  Type,
} from '../../models/queryParams/queryParams';
import {getAnimeByFilter} from '../../services/animes/getAnimesByFilter';

import {Search} from './Search';

type SearchScreenTypes = {
  search: string;
  animeType: Type;
  gender: string;
  animeStatus: Status;
  rating: number[];
  ratingRange: number[];
  genders: GendersData;
  sort: Order;
  sortBy: OrderBy;
  animes: animeData;
  pageInput: string;
  handleSearchChange: (text: string) => void;
  handleTypeChange: (text: Type) => void;
  handleStatusChange: (text: Status) => void;
  handleChangeRatingRange: (value: number[]) => void;
  handleChangeRating: (value: number[]) => void;
  handleGenderChange: (id: string) => void;
  handleSortChange: (value: Order) => void;
  handleSortByChange: (value: OrderBy) => void;
  searchAnimes: (page: number) => void;
  searchByPage: (page: number) => void;
  handleChangeInputSearch: (text: string) => void;
};
export const SearchScreenContext = createContext({} as SearchScreenTypes);
interface animeData extends AnimesAddapted {
  isLoading: boolean;
  isError: boolean;
}

export interface GendersData {
  isLoading: boolean;
  genders: Genders[];
  isError: boolean;
}
export const SearchScreen = () => {
  const [isMount, setIsMount] = useState<boolean>(false);
  const [genders, setGenders] = useState<GendersData>({
    isLoading: false,
    isError: false,
    genders: [],
  });
  const [pageInput, setPageInput] = useState<string>('1');
  const [animes, setAnimes] = useState<animeData>({
    isLoading: true,
    isError: false,
    animes: [],
    page: 1,
    maxPages: 1,
  });
  const {sort, handleSortChange} = useSortOptions();
  const {sortBy, handleSortByChange} = useSortByOptions();
  const [lastFilterSearch, setLastFilterSearch] = useState<any>({
    type: 'null',
    score: 1,
    minScore: 1,
    maxScore: 10,
    status: null,
    gender: '',
    orderBy: null,
    sort: null,
    queu: '',
  });
  const {search, handleSearchChange} = useSearchAnime();
  const {animeType, handleTypeChange} = useAnimeType();
  const {animeStatus, handleStatusChange} = useAnimeStatus();
  const {gender, getGenders, handleGenderChange} = useGenders();
  const {
    multiSlider: ratingRange,
    handleChangeSlider: handleChangeRatingRange,
  } = useMultiSlider();
  const {simpleSlider: rating, handleChangeSlider: handleChangeRating} =
    useSimpleSlider();
  const searchByPage = async (page: number) => {
    setAnimes({
      ...animes,
      isLoading: true,
    });
    const animesResponse = await getAnimeByFilter({
      page: page,
      limit: SEARCH_PAGINATION,
      type: lastFilterSearch.type,
      score: lastFilterSearch.score,
      minScore: lastFilterSearch.minScore,
      maxScore: lastFilterSearch.maxScore,
      status: lastFilterSearch.status,
      gender: lastFilterSearch.gender,
      orderBy: lastFilterSearch.orderBy,
      sort: lastFilterSearch.sort,
      queu: lastFilterSearch.sort,
    });
    if (animesResponse.status !== 200) {
      return setAnimes({
        isError: true,
        isLoading: false,
        page: 1,
        maxPages: 1,
        animes: [],
      });
    }
    if (animesResponse.data) {
      const animeAddapted = animeFilterAddapter(animesResponse.data);
      setPageInput(`${animeAddapted.page}`);
      return setAnimes({
        ...animeAddapted,
        isError: false,
        isLoading: false,
      });
    }
  };
  const handleChangeInputSearch = (text: string) => {
    setPageInput(text);
  };
  const searchAnimes = useCallback(
    async (page: number) => {
      setAnimes({
        ...animes,
        isLoading: true,
      });
      const animesResponse = await getAnimeByFilter({
        page: page,
        limit: SEARCH_PAGINATION,
        type: animeType,
        score: rating[0],
        minScore: ratingRange[0],
        maxScore: ratingRange[1],
        status: animeStatus,
        gender: gender,
        orderBy: sortBy,
        sort: sort,
        queu: search,
      });
      setLastFilterSearch({
        type: animeType,
        score: rating[0],
        minScore: ratingRange[0],
        maxScore: ratingRange[1],
        status: animeStatus,
        gender: gender,
        orderBy: sortBy,
        sort: sort,
        queu: search,
      });
      if (animesResponse.status !== 200) {
        return setAnimes({
          isError: true,
          isLoading: false,
          page: 1,
          maxPages: 1,
          animes: [],
        });
      }
      if (animesResponse.data) {
        const animeAddapted = animeFilterAddapter(animesResponse.data);
        setPageInput(`${animeAddapted.page}`);
        return setAnimes({
          ...animeAddapted,
          isError: false,
          isLoading: false,
        });
      }
    },
    [
      animeStatus,
      animeType,
      animes,
      gender,
      rating,
      ratingRange,
      search,
      sort,
      sortBy,
    ],
  );
  const dataController = useCallback(async () => {
    const gendersClean = await getGenders();

    setGenders({
      isLoading: false,
      genders: gendersClean.genders,
      isError: gendersClean.isError,
    });
    setIsMount(true);
    await searchAnimes(1);
  }, [getGenders, searchAnimes]);
  useEffect(() => {
    if (!isMount) {
      dataController();
    }
  }, [dataController, isMount]);
  return (
    <SearchScreenContext.Provider
      value={{
        handleSearchChange,
        handleTypeChange,
        handleChangeRatingRange,
        handleChangeRating,
        handleStatusChange,
        handleGenderChange,
        handleSortChange,
        handleSortByChange,
        searchAnimes,
        searchByPage,
        handleChangeInputSearch,
        search,
        animeType,
        animeStatus,
        rating,
        ratingRange,
        genders,
        gender,
        sort,
        sortBy,
        animes,
        pageInput,
      }}>
      <Search />
    </SearchScreenContext.Provider>
  );
};
