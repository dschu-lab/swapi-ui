import React, { createContext, useState } from "react";
import { PeopleDto } from "../models/PeopleDto";

interface DetailViewContextState {
  selectedPerson: PeopleDto | null;
  setSelectedPerson: (person: PeopleDto | null) => void;
}

const defaultState: DetailViewContextState = {
  selectedPerson: null,
  setSelectedPerson: (person) => {},
};

export const DetailViewContext =
  createContext<DetailViewContextState>(defaultState);

export const DetailViewContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedPerson, setSelectedPerson] = useState<PeopleDto | null>(null);

  return (
    <DetailViewContext.Provider value={{ selectedPerson, setSelectedPerson }}>
      {children}
    </DetailViewContext.Provider>
  );
};
