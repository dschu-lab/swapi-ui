import { Transform, Type } from "class-transformer";
import { UniverseStandardTime } from "./UniverseStandardTime";

export class PeopleDto {
  @Type(() => UniverseStandardTime)
  @Transform(({ value }) =>
    value === "unknown" ? "unknown" : new UniverseStandardTime(value)
  )
  birth_year: UniverseStandardTime | "unknown";

  eye_color: string;

  films: string[];

  gender: string;

  hair_color: string;

  height: string;

  homeworld: string;

  mass: string;

  name: string;

  skin_color: string;

  species: string[];

  starships: string[];

  vehicles: string[];

  @Type(() => Date)
  created: Date;

  @Type(() => Date)
  edited: Date;

  url: string;
}

export class PeopleListDto {
  count: number;

  next: string | null;

  previous: string | null;

  @Type(() => PeopleDto)
  results: PeopleDto[];
}
