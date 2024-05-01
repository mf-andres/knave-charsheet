import { Dispatch, SetStateAction } from "react";
import DefenseAndBonus from "./defense-and-bonus";
import Ac from "./ac";
import { ItemDO } from "./models/item";

interface Props {
  conState: [number, Dispatch<SetStateAction<number>>];
  strState: [number, Dispatch<SetStateAction<number>>];
  dexState: [number, Dispatch<SetStateAction<number>>];
  intState: [number, Dispatch<SetStateAction<number>>];
  wisState: [number, Dispatch<SetStateAction<number>>];
  charState: [number, Dispatch<SetStateAction<number>>];
  acState: [number, Dispatch<SetStateAction<number>>];
  items: ItemDO[];
}

const DefensesAndBonuses: React.FC<Props> = ({
  conState,
  strState,
  dexState,
  intState,
  wisState,
  charState,
  acState,
  items,
}) => {
  const [con, setCon] = conState;
  const [str, setStr] = strState;
  const [dex, setDex] = dexState;
  const [int, setInt] = intState;
  const [wis, setWis] = wisState;
  const [char, setChar] = charState;
  const [ac, setAc] = acState;

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
      <div className="grid grid-cols-7 grid-rows-1 place-items-center">
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

        <Ac ac={ac} setAc={setAc} items={items}></Ac>
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
};
export default DefensesAndBonuses;
