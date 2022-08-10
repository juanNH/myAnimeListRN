export interface GendersResponse {
  data: Genders[];
}

export interface Genders {
  mal_id: number;
  name: string;
  url: string;
  count: number;
}
