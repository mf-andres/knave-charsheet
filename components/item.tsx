import React, { useState } from "react";

interface ItemProps {
  item: {
    name: string;
    slots: number;
    cost: number;
    acBonus: number;
    quality: number;
  };
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const [name, setName] = useState(item.name);
  const slots = item.slots;
  const cost = item.cost;
  const acBonus = item.acBonus;
  const quality = item.quality;

  return (
    <div className="w-56 h-36 m-2 border-2 border-yellow-950 rounded">
      <div className="grid justify-center p-2 bg-yellow-950 text-yellow-100 text-xl rounded-sm">
        <input
          type="text"
          className=" text-yellow-950 rounded px-2 w-48"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="grid grid-cols-2">
        <div>
          <div className="p-2">
            {slots} Slot{"s" ? slots > 1 : ""}
          </div>
          <div className="p-2">
            {cost} Coin{"s" ? cost > 1 : ""}
          </div>
        </div>
        <div>
          {acBonus > 0 && <div className="p-2">+{acBonus} AC</div>}
          {quality > 0 && <div className="p-2">{quality} Quality</div>}
        </div>
      </div>
    </div>
  );
};

export default Item;
