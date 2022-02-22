import { Item, Picker, Text } from "@adobe/react-spectrum";
import { useContext, useMemo } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import { useSpecies } from "../../hooks/swapi";

export const SpeciesPicker = () => {
  const { isLoading, isFetchingNextPage, data, fetchNextPage } = useSpecies();
  const { species: selectedSpecies, setSpecies } = useContext(FilterContext);

  const species = useMemo(
    () => data?.pages.flatMap((page) => page.results) ?? [],
    [data?.pages]
  );

  return (
    <Picker
      label="Pick a species"
      labelPosition="side"
      items={species}
      isLoading={isLoading || isFetchingNextPage}
      onLoadMore={fetchNextPage}
      selectedKey={selectedSpecies}
      onSelectionChange={(selection) =>
        selection === selectedSpecies ? setSpecies(null) : setSpecies(selection)
      }
    >
      {(species) => (
        <Item key={species.url} textValue={species.name}>
          <Text>{species.name}</Text>
          <Text slot="description">{species.language}</Text>
        </Item>
      )}
    </Picker>
  );
};
