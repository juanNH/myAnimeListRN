import {useState} from 'react';
import {Status} from '../../models/queryParams/queryParams';

export const useAnimeStatus = () => {
  const [animeStatus, setAnimeStatus] = useState<Status>('');
  const handleStatusChange = (value: Status) => {
    return setAnimeStatus(value);
  };
  return {
    animeStatus,
    handleStatusChange,
  };
};
