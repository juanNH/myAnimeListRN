import axios from 'axios';
import {API_URL} from '../../constants/services';

export const getAnimeById = async (id: number) => {
  try {
    const animeResponse = await axios.get(API_URL + `/anime/${id}/full`);
    return {status: animeResponse.status, data: animeResponse.data};
  } catch (error) {
    return {status: 500};
  }
};
