import { fireEvent, render, screen } from "@testing-library/react";
import { Key } from "react";
import { BirthRangeSlider } from ".";
import { BirthRange, FilterContext } from "../../contexts/FilterContext";

describe("BirthRangeSlider", () => {
  let film: Key | null,
    setFilm: jest.Mock,
    species: Key | null,
    setSpecies: jest.Mock,
    birthRange: BirthRange,
    setBirthRange: jest.Mock;

  beforeEach(() => {
    film = null;
    setFilm = jest.fn((key: Key | null) => {
      film = key;
    });

    species = null;
    setSpecies = jest.fn((key: Key | null) => {
      species = key;
    });

    birthRange = {
      start: -900,
      end: 20,
    };
    setBirthRange = jest.fn((range: BirthRange) => {
      birthRange = range;
    });
  });

  it("renders without errors", () => {
    const view = render(
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
        <BirthRangeSlider />
      </FilterContext.Provider>
    );

    expect(view).toBeTruthy();

    expect(birthRange.start).toBe(birthRange.start);
    expect(birthRange.end).toBe(birthRange.end);
  });

  it("updates minimum value", () => {
    render(
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
        <BirthRangeSlider />
      </FilterContext.Provider>
    );

    const minimum = screen.getByLabelText("Minimum");

    const newMin = -345;

    fireEvent.change(minimum, { target: { value: newMin } });

    expect(birthRange.start).toBe(newMin);
    expect(setBirthRange).toBeCalledTimes(1);
  });

  it("updates maximum value", () => {
    render(
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
        <BirthRangeSlider />
      </FilterContext.Provider>
    );

    const maximum = screen.getByLabelText("Maximum");
    const newMax = 0;

    fireEvent.change(maximum, { target: { value: newMax } });

    expect(birthRange.end).toBe(newMax);
    expect(setBirthRange).toBeCalledTimes(1);
  });
});
