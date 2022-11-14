import {useState} from 'react';
import {OrderBy} from '../../models/queryParams/queryParams';

export const useSortByOptions = () => {
  const [sortBy, setSortBy] = useState<OrderBy>('');
  const handleSortByChange = (value: OrderBy) => {
    setSortBy(value);
  };
  return {
    sortBy,
    handleSortByChange,
  };
};
