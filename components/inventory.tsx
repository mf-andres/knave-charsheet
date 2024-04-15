import React, { useState } from "react";
import Item from "./item";
import AddItemOverlay from "./add-item-overlay";

export default function Inventory() {
  const [items, setItems] = useState([
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
  ]);

  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const addItem = (item: any) => {
    setItems([...items, item]);
    toggleOverlay();
  };

  return (
    <div>
      <div className="grid grid-cols-4 grid-rows-5 place-items-start border-2 m-2 border-yellow-950 rounded shadow">
        {items.map((item, index) => (
          <Item key={index} item={item}></Item>
        ))}
      </div>
      <div>
        <button
          className="m-2 p-1 bg-yellow-950 text-yellow-100 rounded-md"
          onClick={toggleOverlay}
        >
          Add Item
        </button>
      </div>
      {showOverlay && (
        <AddItemOverlay onClose={toggleOverlay} onSubmit={addItem} />
      )}
    </div>
  );
}
