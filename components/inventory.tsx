import React from "react";
import Item from "./item";

export default function Inventory() {
  const items = [
    {
      name: "item1",
      slots: 1,
      cost: 1,
      acBonus: 0,
      quality: 0,
    },
    {
      name: "armor1",
      slots: 1,
      cost: 1,
      acBonus: 1,
      quality: 1,
    },
  ];

  return (
    <div>
      {items.map((item, index) => (
        <Item key={index} item={item}></Item>
      ))}
    </div>
  );
}
