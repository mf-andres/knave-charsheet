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
      <div>
        {items.map((item, index) => (
          <Item key={index} item={item}></Item>
        ))}
      </div>
      <div>
        <button className="bg-blue-300" onClick={toggleOverlay}>
          Add Item
        </button>
      </div>
      {showOverlay && (
        <AddItemOverlay onClose={toggleOverlay} onSubmit={addItem} />
      )}
    </div>
  );
}
