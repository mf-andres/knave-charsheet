import React from "react";

export default function Item() {
  const name: string = "item";
  const slots: number = 1;
  const cost: number = 1;
  const acBonus: number = 0;
  const quality: number = 0;

  return (
    <div>
      <div>{name}</div>
      <div>slots: {slots}</div>
      <div>cost: {cost}</div>
      {acBonus > 0 && <div>ac bonus: {acBonus}</div>}
      {quality > 0 && <div>quality: {quality}</div>}
    </div>
  );
}
