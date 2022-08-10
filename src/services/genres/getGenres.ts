import axios from 'axios';
import {GendersResponse} from '../../models/genders/genders';
import {API_URL} from './../../constants/services';
export const getGenres = async () => {
  try {
    const {status, data} = await axios.get<GendersResponse>(
      API_URL + '/genres/anime',
    );
    return {status, data};
  } catch (error) {
    return {status: 500};
  }
};
