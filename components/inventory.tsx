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
  const getTakenSlots = (items: ItemDO[]) => {
    if (items.length === 0) {
      return 0;
    }
    return items.map((item) => item.slots).reduce((sum, slots) => sum + slots);
  };

  const [takenSlots, setTakenSlots] = useState(getTakenSlots(items));

  useEffect(() => {
    console.log(items);
    setTakenSlots(getTakenSlots(items));
  }, [items]);

  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const addItem = (item: any) => {
    setItems([...items, item]);
    toggleOverlay();
  };

  const renameItem = (itemId: string, newName: string) => {
    setItems(
      items.map((item) => {
        if (item.id != itemId) {
          item.name = newName;
        }
        return item;
      })
    );
  };

  const popItem = (itemId: string) => {
    setItems(items.filter((item) => item.id != itemId));
  };

  return (
    <div>
      <div className="grid grid-cols-4 place-items-start border-2 m-2 border-yellow-950 rounded shadow">
        {items.map((item, index) => (
          <Item
            key={index}
            item={item}
            renameItem={renameItem}
            popItem={popItem}
          ></Item>
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
