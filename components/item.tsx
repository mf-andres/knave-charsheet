import React from "react";

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
  const name = item.name;
  const slots = item.slots;
  const cost = item.cost;
  const acBonus = item.acBonus;
  const quality = item.quality;

  return (
    <div className="w-56 h-36 m-2 border-2 border-yellow-950 rounded">
      <div className="p-2 bg-yellow-950 text-yellow-100 text-xl rounded-sm">
        {name}
      </div>
      <div className="grid grid-cols-2">
        <div>
          <div className="p-2">slots: {slots}</div>
          <div className="p-2">cost: {cost}</div>
        </div>
        <div>
          {acBonus > 0 && <div className="p-2">ac bonus: {acBonus}</div>}
          {quality > 0 && <div className="p-2">quality: {quality}</div>}
        </div>
      </div>
    </div>
  );
};

export default Item;
