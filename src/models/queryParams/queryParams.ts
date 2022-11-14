export type Filter = 'airing' | 'upcoming' | 'bypopularity' | 'favorite';
export type Type = '' | 'tv' | 'movie' | 'ova' | 'special' | 'ona' | 'music';
export type Status = '' | 'airing' | 'complete' | 'upcoming';
export type Order = '' | 'asc' | 'desc';
export type OrderBy =
  | ''
  | 'type'
  | 'rating'
  | 'start_date'
  | 'end_date'
  | 'episodes'
  | 'score'
  | 'rank'
  | 'popularity'
  | 'members'
  | 'favorites';
export type Score = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
