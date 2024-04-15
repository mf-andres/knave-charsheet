import React from "react";

interface ItemProps {
  traitName: string;
  traitValue: string;
  handleTraitChange: (traitName: string, value: string) => void;
  traitValues: string[];
}

const TraitSelect: React.FC<ItemProps> = ({
  traitName,
  traitValue,
  handleTraitChange,
  traitValues,
}) => {
  const capitalizedText = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <div className="grid grid-flow-col m-2">
      <label className="m-2 w-28 text-yellow-950" htmlFor={traitName}>
        {capitalizedText(traitName)}
      </label>
      <select
        className="m-2 p-1 bg-yellow-950 text-yellow-100 rounded-md"
        id={traitName}
        value={traitValue}
        onChange={(e) => handleTraitChange(traitName, e.target.value)}
      >
        {traitValues.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TraitSelect;
