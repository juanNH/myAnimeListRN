import axios from 'axios';
import {API_URL} from '../../constants/services';
import {Filter} from '../../models/queryParams/queryParams';
import {TopUpCommingAnimesData} from '../../models/top/topUpcommingAnimes/topUpcommingAnimes';

export const getTopAnime = async (
  controller: AbortController,
  page: number,
  limit: number,
  filter: Filter,
) => {
  const config = {
    params: {
      page: page,
      limit: limit,
      filter: filter,
    },
    signal: controller.signal,
  };

  try {
    const {status, data} = await axios.get<TopUpCommingAnimesData>(
      API_URL + '/top/anime',
      config,
    );
    return {status, data};
  } catch (error) {
    return {status: 500};
  }
};
