import React, {createContext, useCallback, useEffect, useState} from 'react';
import {useGenders} from '../../hooks';
import {
  useSearchAnime,
  useAnimeType,
  useAnimeStatus,
  useMultiSlider,
  useSimpleSlider,
} from '../../hooks/filters';
import {Genders} from '../../models/genders/gendersAddapted';
import {Status, Type} from '../../models/queryParams/queryParams';

import {Search} from './Search';

type SearchScreenTypes = {
  search: string;
  animeType: Type;
  gender: string;
  animeStatus: Status;
  rating: number[];
  ratingRange: number[];
  genders: GendersData;
  handleSearchChange: (text: string) => void;
  handleTypeChange: (text: Type) => void;
  handleStatusChange: (text: Status) => void;
  handleChangeRatingRange: (value: number[]) => void;
  handleChangeRating: (value: number[]) => void;
  handleGenderChange: (id: string) => void;
};
export const SearchScreenContext = createContext({} as SearchScreenTypes);

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

  const dataController = useCallback(async () => {
    const gendersClean = await getGenders();
    setGenders({
      isLoading: false,
      genders: gendersClean.genders,
      isError: gendersClean.isError,
    });
    setIsMount(true);
  }, [getGenders]);
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
        search,
        animeType,
        animeStatus,
        rating,
        ratingRange,
        genders,
        gender,
      }}>
      <Search />
    </SearchScreenContext.Provider>
  );
};
