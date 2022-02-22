import { Item, ListBox, Text } from "@adobe/react-spectrum";
import User from "@spectrum-icons/workflow/User";
import { useContext, useEffect, useMemo } from "react";
import { DetailViewContext } from "../contexts/DetailViewContext";
import { FilterContext } from "../contexts/FilterContext";
import { usePeople } from "../hooks/swapi";

export const PeopleList = () => {
  const { isLoading, isFetchingNextPage, data, fetchNextPage, hasNextPage } =
    usePeople();
  const { film, species, birthRange } = useContext(FilterContext);
  const { selectedPerson, setSelectedPerson } = useContext(DetailViewContext);

  // Memorize filtered people
  const people = useMemo(
    () =>
      data?.pages.flatMap((page) =>
        page.results.filter((person) => {
          let shouldInclude = true;

          // Filter out persons not included in the movie
          if (film) {
            shouldInclude = person.films.includes(String(film));
          }
          // Filter by species, skip if already filtered out by film
          if (species && shouldInclude) {
            shouldInclude = person.species.includes(String(species));
          }

          // Filter by birth date, skip if already filter out by film or species
          if (shouldInclude && person.birth_year !== "unknown") {
            shouldInclude =
              person.birth_year.value > birthRange.start &&
              person.birth_year.value < birthRange.end;
          }

          return shouldInclude;
        })
      ) ?? [],
    [data?.pages, film, species, birthRange.start, birthRange.end]
  );

  // Nullify selection if person is not in list anymore
  useEffect(() => {
    if (!people.some((p) => p.url === selectedPerson?.url)) {
      setSelectedPerson(null);
    }
  }, [people, selectedPerson, setSelectedPerson]);

  // Invoked when the selection changes
  const handleSelectionChange = (selection: "all" | Set<React.Key>) => {
    setSelectedPerson(
      selection === "all"
        ? null
        : people.find((person) => selection.has(person.name)) ?? null
    );
  };

  return (
    <ListBox
      maxHeight="100%"
      aria-label="Alignment"
      items={people}
      isLoading={isLoading || isFetchingNextPage}
      onLoadMore={() => hasNextPage && fetchNextPage()}
      selectionMode="single"
      selectedKeys={selectedPerson ? [selectedPerson.name] : []}
      onSelectionChange={handleSelectionChange}
    >
      {(person) => (
        <Item key={person.name} textValue={person.name}>
          <User size="S" />
          <Text>{person.name}</Text>
          <Text slot="description">
            {person.gender}, {person.birth_year.toString()}
          </Text>
        </Item>
      )}
    </ListBox>
  );
};
