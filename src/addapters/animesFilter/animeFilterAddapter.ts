import {SEARCH_PAGINATION} from '../../constants/paginations';
import {AnimeFilteredResponse} from '../../models/animes/Animes';
import {AnimesAddapted} from '../../models/animes/AnimesAddapted';

export const animeFilterAddapter = (
  data: AnimeFilteredResponse,
): AnimesAddapted => {
  let animeData: AnimesAddapted = {
    page: 1,
    maxPages: null,
    animes: [],
  };
  animeData.page = data.pagination.current_page;
  animeData.maxPages = Math.ceil(
    data.pagination.items.total / SEARCH_PAGINATION,
  );
  for (const anime of data.data) {
    animeData.animes.push({
      id: anime.mal_id,
      imageUrl: anime.images.jpg.image_url,
      title: anime.title,
      type: anime.type,
    });
  }
  return animeData;
};
