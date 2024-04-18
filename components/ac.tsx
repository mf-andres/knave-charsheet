import { Dispatch, SetStateAction, useEffect } from "react";
import { ItemDO } from "./models/item";

interface Props {
  ac: number;
  setAc: Dispatch<SetStateAction<number>>;
  items: ItemDO[];
}

const Ac: React.FC<Props> = ({ ac, setAc, items }) => {
  useEffect(() => {
    const totalAcBonus = items
      .map((item) => {
        return item.acBonus;
      })
      .reduce((sum, acBonus) => {
        return sum + acBonus;
      });
    setAc(totalAcBonus);
  }, [items]);

  return (
    <div className="grid grid-cols-2 grid-rows-2 items-center w-24 h-20 border-2 m-2 border-yellow-950 rounded shadow">
      {/* can we modify both and change the other? */}
      <div className="col-start-1 col-span-2 row-span-1 text-center p-1 border-4 border-yellow-950 rounded">
        AC
      </div>
      <div className="col-start-1 col-span-1 row-start-2 row-span-1 text-center text-xl border-r-2 border-yellow-950">
        {10 + ac}
      </div>
      <input
        className="col-start-2 col-span-1 row-start-2 row-span-1 w-7 h-6 m-2 text-yellow-900 rounded text-base text-center"
        value={"+" + ac}
        onChange={(e) => {
          setAc(parseInt(e.target.value));
        }}
      />
    </div>
  );
};

export default Ac;
