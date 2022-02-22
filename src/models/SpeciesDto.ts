import { Type } from "class-transformer";

export class SpeciesDto {
  name: string;

  classification: string;

  designation: string;

  average_height: string;

  skin_colors: string;

  hair_colors: string;

  eye_colors: string;

  average_lifespan: string;

  homeworld: string;

  language: string;

  people: string[];

  films: string[];

  @Type(() => Date)
  created: Date;

  @Type(() => Date)
  edited: Date;

  url: string;
}

export class SpeciesListDto {
  count: number;

  next: string | null;

  previous: string | null;

  @Type(() => SpeciesDto)
  results: SpeciesDto[];
}
