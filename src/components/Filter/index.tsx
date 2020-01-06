import React, { FC } from "react";
import { FilterSelect, FilterSelectItem } from "./index.styled";

interface IFilter {
  handleChange: () => void;
  types: string[];
  filter: string;
}

const Filter: FC<IFilter> = ({ types, handleChange, filter }) => {
  return (
    <FilterSelect onChange={handleChange} value={filter}>
      {types.map(type => (
        <FilterSelectItem value={type}>{type}</FilterSelectItem>
      ))}
    </FilterSelect>
  );
};

export default Filter;
