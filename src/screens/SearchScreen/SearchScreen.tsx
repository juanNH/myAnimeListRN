import React, {createContext, useEffect, useState} from 'react';
import {Status, Type} from '../../models/queryParams/queryParams';

import {Search} from './Search';

type SearchScreenTypes = {
  search: string;
  animeType: Type;
  animeStatus: Status;
  handleSearchChange: (text: string) => void;
  handleTypeChange: (text: Type) => void;
  handleStatusChange: (text: Status) => void;
};
export const SearchScreenContext = createContext({} as SearchScreenTypes);

export const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const [animeType, setAnimeType] = useState<Type>('');
  const [animeStatus, setAnimeStatus] = useState<Status>('');

  const handleSearchChange = (text: string) => {
    return setSearch(text);
  };

  const handleTypeChange = (value: Type) => {
    return setAnimeType(value);
  };
  const handleStatusChange = (value: Status) => {
    return setAnimeStatus(value);
  };
  useEffect(() => {
    const controller = new AbortController();

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <SearchScreenContext.Provider
      value={{
        handleSearchChange,
        handleTypeChange,
        handleStatusChange,
        search,
        animeType,
        animeStatus,
      }}>
      <Search />
    </SearchScreenContext.Provider>
  );
};
