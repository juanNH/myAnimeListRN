import {useState} from 'react';

export const useSearchAnime = () => {
  const [search, setSearch] = useState('');
  const handleSearchChange = (text: string) => {
    return setSearch(text);
  };
  return {
    search,
    handleSearchChange,
  };
};
