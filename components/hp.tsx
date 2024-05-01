import { Dispatch, SetStateAction } from "react";

interface Props {
  maxHpState: [number, Dispatch<SetStateAction<number>>];
  hpState: [number, Dispatch<SetStateAction<number>>];
}

const HpInput: React.FC<Props> = ({ maxHpState, hpState }) => {
  const [maxHp, setMaxHp] = maxHpState;
  const [hp, setHp] = hpState;
  const rollHp = () => {
    const rollD8 = () => Math.floor(Math.random() * 8) + 1;
    const newMaxHp = rollD8();
    setMaxHp(newMaxHp);
    setHp(newMaxHp);
  };

  return (
    <div className="grid grid-cols-3 h-20 border-2 m-2 border-yellow-950 rounded shadow">
      <div className="grid grid-cols-2 justify-items-center items-center">
        <div className="p-2 w-20">Max HP: </div>
        <input
          type="text"
          className="w-20 h-14 m-2 text-yellow-900 text-center rounded"
          value={maxHp}
          onChange={(e) => setMaxHp(parseInt(e.target.value))}
        ></input>
      </div>
      <div className="grid grid-cols-2 justify-items-center items-center">
        <div className="p-2 w-20">HP: </div>
        <input
          type="text"
          className="w-20 h-14 m-2 text-yellow-900 text-center rounded"
          value={hp}
          onChange={(e) => setHp(parseInt(e.target.value))}
        ></input>
      </div>
      <div className="grid content-center justify-center">
        <button
          className="m-2 p-1 bg-yellow-950 text-yellow-100 rounded-md"
          onClick={(e) => rollHp()}
        >
          Roll HP
        </button>
      </div>
    </div>
  );
};

export default HpInput;
