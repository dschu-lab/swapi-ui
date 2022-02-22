import React, { createContext, Key, useState } from "react";

export interface BirthRange {
  start: number;
  end: number;
}

interface FilterContextState {
  film: Key | null;
  setFilm: (key: Key | null) => void;

  species: Key | null;
  setSpecies: (key: Key | null) => void;

  birthRange: BirthRange;
  setBirthRange: (range: BirthRange) => void;
}

const defaultState: FilterContextState = {
  film: null,
  setFilm: (key: Key | null) => {},

  species: null,
  setSpecies: (key: Key | null) => {},

  birthRange: {
    start: -900,
    end: 20,
  },
  setBirthRange: (range: BirthRange) => {},
};

export const FilterContext = createContext<FilterContextState>(defaultState);

export const FilterContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [film, setFilm] = useState<Key | null>(null);
  const [species, setSpecies] = useState<Key | null>(null);
  const [birthRange, setBirthRange] = useState<BirthRange>(
    defaultState.birthRange
  );

  return (
    <FilterContext.Provider
      value={{
        film,
        setFilm,
        species,
        setSpecies,
        birthRange,
        setBirthRange,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
