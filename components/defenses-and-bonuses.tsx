import { ChangeEvent, useState } from "react";

export default function DefensesAndBonuses() {
  const [str, setStr] = useState(0);
  const [dex, setDex] = useState(0);
  const [con, setCon] = useState(0);
  const [int, setInt] = useState(0);
  const [wis, setWis] = useState(0);
  const [cha, setCha] = useState(0);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    setter: Function
  ) => {
    const newValue = parseInt(e.target.value);
    setter(newValue);
  };

  const setStats = () => {
    setStr(rollStat());
    setDex(rollStat());
    setCon(rollStat());
    setInt(rollStat());
    setWis(rollStat());
    setCha(rollStat());
  };

  const rollStat = () => {
    return Math.min(rollD(6), rollD(6), rollD(6));
  };

  const rollD = (n: number) => {
    return Math.floor(Math.random() * n) + 1;
  };

  return (
    <div>
      <div className="grid grid-rows-1">
        <div className="grid grid-cols-2 grid-rows-2 items-center w-24 h-20 border-2 m-2 border-yellow-950 rounded shadow">
          {/* can we modify both and change the other? */}
          <div className="col-start-1 col-span-2 row-span-1 text-center p-1 border-4 border-yellow-950 rounded">
            STR
          </div>
          <div className="col-start-1 col-span-1 row-start-2 row-span-1 text-center text-xl border-r-2 border-yellow-950">
            {10 + str}
          </div>
          <input
            className="col-start-2 col-span-1 row-start-2 row-span-1 w-7 h-6 m-2 text-yellow-900 rounded text-base text-center"
            value={"+" + str}
            onChange={(e) => handleInputChange(e, setStr)}
          />
        </div>

        <div className="col-start-2 grid grid-cols-1 grid-rows-1">
          {/* can we modify both and change the other? */}
          <div className="col-start-1 col-span-2 grid-rows-1">{10 + dex}</div>
          <input
            className="col-start-3 col-span-1 w-16 m-2 p-2 text-yellow-900 rounded"
            type="number"
            value={dex}
            onChange={(e) => handleInputChange(e, setStr)}
          />
          <div className="col-start-1 col-span-2 row-start-3 row-span-2">
            DEX
          </div>
        </div>
      </div>
      <div>
        <button
          className="m-2 p-1 bg-yellow-950 text-yellow-100 rounded-md"
          onClick={(e) => setStats()}
        >
          Roll Stats
        </button>
      </div>
    </div>
  );
}
