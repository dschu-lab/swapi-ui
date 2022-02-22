import {
  Flex,
  Heading,
  ProgressCircle,
  Text,
  View,
} from "@adobe/react-spectrum";
import { Fragment, useContext, useEffect } from "react";
import { DetailViewContext } from "../contexts/DetailViewContext";
import { useFilms, useSpecies, useStarships } from "../hooks/swapi";

export const DetailView = () => {
  const { selectedPerson } = useContext(DetailViewContext);

  const { data: filmData } = useFilms();
  const {
    data: speciesData,
    fetchNextPage,
    hasNextPage: hasNextSpeciesPage,
    isFetchingNextPage: isFetchingNextSpeciesPage,
  } = useSpecies();

  const { data: starshipData, isFetching: isFetchingStarships } = useStarships(
    selectedPerson?.starships
  );

  useEffect(() => {
    if (
      selectedPerson?.species.length &&
      !isFetchingNextSpeciesPage &&
      !speciesData?.pages
        .flatMap((page) => page.results)
        .find((species) => selectedPerson?.species.includes(species.url)) &&
      hasNextSpeciesPage
    ) {
      fetchNextPage();
    }
  }, [
    selectedPerson,
    isFetchingNextSpeciesPage,
    speciesData?.pages,
    fetchNextPage,
    hasNextSpeciesPage,
  ]);

  const details = [
    {
      description: "Birth Year",
      value: selectedPerson?.birth_year.toString(),
      isLoading: false,
    },
    {
      description: "Species",
      value: speciesData?.pages
        .flatMap((page) => page.results)
        .filter((species) => selectedPerson?.species.includes(species.url))
        .map((species) => species.name)
        .join(", "),
      isLoading: isFetchingNextSpeciesPage,
    },
    {
      description: "Movies",
      value: filmData?.results
        .filter((film) => selectedPerson?.films.includes(film.url))
        .map((film) => film.title)
        .join(", "),
      isLoading: false,
    },
    {
      description: "Star Ships",
      value: starshipData.map((starship) => starship.name).join(", "),
      isLoading: isFetchingStarships,
    },
  ];

  return (
    <View
      borderWidth="thin"
      borderColor="dark"
      borderRadius="medium"
      padding="size-250"
      flex="1 1 auto"
    >
      <Flex
        direction="column"
        flex={1}
        height="100%"
        justifyContent={selectedPerson ? "start" : "center"}
      >
        {!selectedPerson ? (
          <Heading level={3} alignSelf="center">
            Please select a character
          </Heading>
        ) : (
          <>
            <Heading level={3} marginTop="size-0">
              {selectedPerson.name}
            </Heading>
            {details.map((detail) => (
              <Fragment key={detail.description}>
                <Heading level={4} marginBottom="size-0">
                  {detail.description}
                </Heading>
                {detail.isLoading ? (
                  <ProgressCircle
                    aria-label="Loading…"
                    isIndeterminate
                    size="S"
                  />
                ) : (
                  <Text>{detail.value}</Text>
                )}
              </Fragment>
            ))}
          </>
        )}
      </Flex>
    </View>
  );
};
