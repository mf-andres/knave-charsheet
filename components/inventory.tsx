import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Item from "./item";
import AddItemOverlay from "./add-item-overlay";
import { ItemDO } from "./models/item";

interface Props {
  con: number;
  items: ItemDO[];
  setItems: Dispatch<SetStateAction<ItemDO[]>>;
}

const Inventory: React.FC<Props> = ({ con, items, setItems }) => {
  const getTakenSlots = () => {
    return items.map((item) => item.slots).reduce((sum, slots) => sum + slots);
  };
  const [takenSlots, setTakenSlots] = useState(getTakenSlots());

  useEffect(() => {
    setTakenSlots(getTakenSlots());
  }, [items]);

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
      <div className="grid grid-cols-4 place-items-start border-2 m-2 border-yellow-950 rounded shadow">
        {items.map((item, index) => (
          <Item key={index} item={item}></Item>
        ))}
      </div>
      <div className="flex flex-row">
        <button
          className="m-2 p-1 bg-yellow-950 text-yellow-100 rounded-md"
          onClick={toggleOverlay}
        >
          Add Item
        </button>
        <div className="m-2 p-1 bg-yellow-500 text-yellow-950 rounded-md">
          Slots: {takenSlots}/{con + 10}
        </div>
      </div>
      {showOverlay && (
        <AddItemOverlay onClose={toggleOverlay} onSubmit={addItem} />
      )}
    </div>
  );
};
export default Inventory;
