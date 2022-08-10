import {useState} from 'react';
import {Type} from '../../models/queryParams/queryParams';

export const useAnimeType = () => {
  const [animeType, setAnimeType] = useState<Type>('');
  const handleTypeChange = (value: Type) => {
    return setAnimeType(value);
  };
  return {
    animeType,
    handleTypeChange,
  };
};
