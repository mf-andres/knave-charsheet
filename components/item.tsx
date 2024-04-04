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
    <div>
      <div>{name}</div>
      <div>slots: {slots}</div>
      <div>cost: {cost}</div>
      {acBonus > 0 && <div>ac bonus: {acBonus}</div>}
      {quality > 0 && <div>quality: {quality}</div>}
    </div>
  );
};

export default Item;
