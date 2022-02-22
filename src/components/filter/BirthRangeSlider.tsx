import { RangeSlider } from "@adobe/react-spectrum";
import { useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import { UniverseStandardTime } from "../../models/UniverseStandardTime";

const { toFormattedString } = UniverseStandardTime;

export const BirthRangeSlider = () => {
  const { birthRange, setBirthRange } = useContext(FilterContext);
  const min = -900;
  const max = 20;

  return (
    <RangeSlider
      labelPosition="side"
      label="Birth&nbsp;range"
      defaultValue={{ start: birthRange.start, end: birthRange.end }}
      minValue={min}
      maxValue={max}
      value={birthRange}
      getValueLabel={({ start, end }) =>
        `${toFormattedString(start)} to ${toFormattedString(end)}`
      }
      onChange={({ start, end }) => {
        setBirthRange({ start, end });
      }}
    />
  );
};
