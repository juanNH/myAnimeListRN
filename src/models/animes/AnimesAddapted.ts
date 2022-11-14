export interface AnimesAddapted {
  page: number;
  maxPages: number;
  animes: AnimeAddapted[];
}

export interface AnimeAddapted {
  id: number;
  imageUrl: string;
  title: string;
  type: string;
}
