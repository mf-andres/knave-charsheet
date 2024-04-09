import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

interface Props {
  stat: number;
  statSetter: Dispatch<SetStateAction<number>>;
  statName: string;
}

const DefenseAndBonus: React.FC<Props> = ({ stat, statSetter, statName }) => {
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    setter: Function
  ) => {
    const newValue = parseInt(e.target.value);
    setter(newValue);
  };

  return (
    <div className="grid grid-cols-2 grid-rows-2 items-center w-24 h-20 border-2 m-2 border-yellow-950 rounded shadow">
      {/* can we modify both and change the other? */}
      <div className="col-start-1 col-span-2 row-span-1 text-center p-1 border-4 border-yellow-950 rounded">
        {statName}
      </div>
      <div className="col-start-1 col-span-1 row-start-2 row-span-1 text-center text-xl border-r-2 border-yellow-950">
        {10 + stat}
      </div>
      <input
        className="col-start-2 col-span-1 row-start-2 row-span-1 w-7 h-6 m-2 text-yellow-900 rounded text-base text-center"
        value={"+" + stat}
        onChange={(e) => handleInputChange(e, statSetter)}
      />
    </div>
  );
};

export default DefenseAndBonus;
