import { ChangeEvent, useState } from "react";
import DefenseAndBonus from "./defense-and-bonus";

export default function DefensesAndBonuses() {
  const [str, setStr] = useState(0);
  const [dex, setDex] = useState(0);
  const [con, setCon] = useState(0);
  const [int, setInt] = useState(0);
  const [wis, setWis] = useState(0);
  const [char, setChar] = useState(0);

  const setStats = () => {
    setStr(rollStat());
    setDex(rollStat());
    setCon(rollStat());
    setInt(rollStat());
    setWis(rollStat());
    setChar(rollStat());
  };

  const rollStat = () => {
    return Math.min(rollD(6), rollD(6), rollD(6));
  };

  const rollD = (n: number) => {
    return Math.floor(Math.random() * n) + 1;
  };

  return (
    <div>
      <div className="grid grid-cols-6 grid-rows-1 place-items-center">
        <DefenseAndBonus
          stat={str}
          statSetter={setStr}
          statName="STR"
        ></DefenseAndBonus>

        <DefenseAndBonus
          stat={dex}
          statSetter={setDex}
          statName="DEX"
        ></DefenseAndBonus>

        <DefenseAndBonus
          stat={con}
          statSetter={setCon}
          statName="CON"
        ></DefenseAndBonus>

        <DefenseAndBonus
          stat={int}
          statSetter={setInt}
          statName="INT"
        ></DefenseAndBonus>

        <DefenseAndBonus
          stat={wis}
          statSetter={setWis}
          statName="WIS"
        ></DefenseAndBonus>

        <DefenseAndBonus
          stat={char}
          statSetter={setChar}
          statName="CHAR"
        ></DefenseAndBonus>
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
