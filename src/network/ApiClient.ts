import { plainToInstance } from "class-transformer";
import { FilmDto, FilmListDto } from "../models/FilmDto";
import { PeopleDto, PeopleListDto } from "../models/PeopleDto";
import { SpeciesDto, SpeciesListDto } from "../models/SpeciesDto";
import { StarshipDto } from "../models/StarshipDto";

/**
 * Simple API client using the fetch api
 */
export class ApiClient {
  static readonly baseURL = "https://swapi.py4e.com/api";

  public async getPeoples(page: number = 1): Promise<PeopleListDto> {
    const data = await fetch(`${ApiClient.baseURL}/people/?page=${page}`)
      .then((response) => {
        if (response.status === 200) {
          return response;
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((response) => response.json() as Promise<Object>);

    return plainToInstance(PeopleListDto, data);
  }

  public async getPeople(id: string): Promise<PeopleDto> {
    const data = await fetch(`${ApiClient.baseURL}/people/${id}`)
      .then((response) => {
        if (response.status === 200) {
          return response;
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((response) => response.json() as Promise<Object>);

    return plainToInstance(PeopleDto, data);
  }

  public async getFilms(page: number = 1): Promise<FilmListDto> {
    const data = await fetch(`${ApiClient.baseURL}/films/?page=${page}`)
      .then((response) => {
        if (response.status === 200) {
          return response;
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((response) => response.json() as Promise<Object>);

    return plainToInstance(FilmListDto, data);
  }

  public async getFilm(id: string): Promise<FilmDto> {
    const data = await fetch(`${ApiClient.baseURL}/films/${id}`)
      .then((response) => {
        if (response.status === 200) {
          return response;
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((response) => response.json() as Promise<Object>);

    return plainToInstance(FilmDto, data);
  }

  public async getSpeciesList(page: number = 1): Promise<SpeciesListDto> {
    const data = await fetch(`${ApiClient.baseURL}/species/?page=${page}`)
      .then((response) => {
        if (response.status === 200) {
          return response;
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((response) => response.json() as Promise<Object>);

    return plainToInstance(SpeciesListDto, data);
  }

  public async getSpecies(id: string): Promise<SpeciesDto> {
    const data = await fetch(`${ApiClient.baseURL}/species/${id}`)
      .then((response) => {
        if (response.status === 200) {
          return response;
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((response) => response.json() as Promise<Object>);

    return plainToInstance(SpeciesDto, data);
  }

  public async getStarship(id: string): Promise<StarshipDto> {
    const data = await fetch(`${ApiClient.baseURL}/starships/${id}`)
      .then((response) => {
        if (response.status === 200) {
          return response;
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((response) => response.json() as Promise<Object>);

    return plainToInstance(StarshipDto, data);
  }
}
