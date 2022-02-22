import { Item, Picker, Text } from "@adobe/react-spectrum";
import { useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import { useFilms } from "../../hooks/swapi";

export const FilmPicker = () => {
  const { isLoading, data } = useFilms();
  const { film, setFilm } = useContext(FilterContext);

  return (
    <Picker
      label="Pick a movie"
      labelPosition="side"
      items={data?.results ?? []}
      isLoading={isLoading}
      selectedKey={film}
      onSelectionChange={(selection) =>
        selection === film ? setFilm(null) : setFilm(selection)
      }
    >
      {(film) => (
        <Item key={film.url} textValue={film.title}>
          <Text>{film.title}</Text>
          <Text slot="description">{`by ${film.director}`}</Text>
        </Item>
      )}
    </Picker>
  );
};
