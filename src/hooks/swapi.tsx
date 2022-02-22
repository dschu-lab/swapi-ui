import { useEffect, useState } from "react";
import {
  QueryOptions,
  useInfiniteQuery,
  useQueries,
  useQuery,
} from "react-query";
import { StarshipDto } from "../models/StarshipDto";
import { ApiClient } from "../network/ApiClient";

const apiClient = new ApiClient();

/**
 * Fetches all people using infinite query
 *
 * @returns Query result
 */
const usePeople = () => {
  const apiUrl = `${ApiClient.baseURL}/people/?page=`;
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isError,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery(
    "peoples",
    ({ pageParam }) => apiClient.getPeoples(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.next?.replace(apiUrl, ""),
      getPreviousPageParam: (firstPage) =>
        firstPage.previous?.replace(apiUrl, ""),
    }
  );

  return {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isError,
    isFetchingNextPage,
    isLoading,
  };
};

/**
 * Fetches all films using infinite query
 *
 * @returns Query result
 */
const useFilms = () => {
  const { isLoading, isError, data, error } = useQuery(
    "films",
    ({ pageParam }) => apiClient.getFilms(pageParam)
  );

  return { isLoading, isError, data, error };
};

const useSpecies = () => {
  const apiUrl = `${ApiClient.baseURL}/species/?page=`;
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isError,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery(
    "species",
    ({ pageParam }) => apiClient.getSpeciesList(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.next?.replace(apiUrl, ""),
      getPreviousPageParam: (firstPage) =>
        firstPage.previous?.replace(apiUrl, ""),
    }
  );

  return {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isError,
    isFetchingNextPage,
    isLoading,
  };
};
/**
 * Hook to fetch starships
 *
 * @param starships A list of resources to fetch
 * @returns List of fetched starships and the fetching state
 */
const useStarships = (starships?: string[]) => {
  const [queries, setQueries] = useState<QueryOptions<StarshipDto>[]>([]);

  useEffect(() => {
    if (starships) {
      let nextQueries: QueryOptions<StarshipDto>[] = [];
      starships.forEach((ship) => {
        const match = ship.match(/\/(\d+)\//);
        const id = match ? match[1] : "-1";
        nextQueries.push({
          queryKey: ["starships", id],
          queryFn: () => apiClient.getStarship(id),
        });
      });

      setQueries(nextQueries);
    }
  }, [starships]);

  const results = useQueries(queries);

  const isFetching = results
    .map((result) => result.isFetching)
    .reduce((a, b) => a || b, false);

  return {
    isFetching,
    data: [
      ...results
        .map((result) => result.data)
        .filter((result) => result !== undefined),
    ] as StarshipDto[],
  };
};

export { usePeople, useFilms, useSpecies, useStarships };
