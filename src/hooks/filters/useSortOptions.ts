import {useState} from 'react';
import {Order} from '../../models/queryParams/queryParams';

export const useSortOptions = () => {
  const [sort, setSort] = useState<Order>('');

  const handleSortChange = (value: Order) => {
    setSort(value);
  };

  return {
    sort,
    handleSortChange,
  };
};
