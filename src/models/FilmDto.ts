import { Type } from "class-transformer";

export class FilmDto {
  title: string;

  episode_id: number;

  opening_crawl: string;

  director: string;

  producer: string;

  @Type(() => Date)
  release_date: Date;

  characters: string[];

  planets: string[];

  starships: string[];

  vehicles: string[];

  species: string[];

  @Type(() => Date)
  created: Date;

  @Type(() => Date)
  edited: Date;

  url: string;
}

export class FilmListDto {
  count: number;

  next: string | null;

  previous: string | null;

  @Type(() => FilmDto)
  results: FilmDto[];
}
