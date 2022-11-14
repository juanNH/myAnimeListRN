import axios from 'axios';
import {API_URL} from '../../constants/services';
import {AnimeFilteredResponse} from '../../models/animes/Animes';
import {
  Order,
  OrderBy,
  Score,
  Status,
  Type,
} from '../../models/queryParams/queryParams';

interface getAnimeByFilterProps {
  page: number;
  limit: number;
  type?: Type | null;
  score?: Score | null | number;
  minScore?: Score | null | number;
  maxScore?: Score | null | number;
  status?: Status | null;
  gender?: string | null;
  orderBy?: OrderBy | null;
  sort?: Order | null;
  queu?: string | null;
}

export const getAnimeByFilter = async ({
  page,
  limit,
  type = null,
  score = null,
  minScore = null,
  maxScore = null,
  status: statusAnime = null,
  gender = null,
  orderBy = null,
  sort = null,
  queu = null,
}: getAnimeByFilterProps) => {
  const config = {
    params: {
      page: page,
      limit: limit,
      type: type,
      score: score,
      min_score: minScore,
      max_score: maxScore,
      status: statusAnime,
      genres: gender,
      order_by: orderBy,
      sort: sort,
      q: queu,
    },
  };

  try {
    const {status, data} = await axios.get<AnimeFilteredResponse>(
      API_URL + '/anime',
      config,
    );
    return {status: status, data};
  } catch (error) {
    return {status: 500};
  }
};
