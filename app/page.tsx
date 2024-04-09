"use client";

import DefensesAndBonuses from "@/components/defenses-and-bonuses";
import Inventory from "@/components/inventory";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-3 bg-yellow-200">
      <div className="col-start-1 col-span-6 row-start-1 row-span-1">
        <div className="flex items-center m-1 bg-yellow-950 text-yellow-200 rounded">
          <div className="p-2">Name:</div>
          <input
            type="text"
            className="grow m-2 p-2 text-yellow-900 rounded"
          ></input>
        </div>
      </div>

      {/* TODO refactor level xp, hp and ac are similar looking input */}
      <div className="col-start-7 col-span-1 row-start-1 row-span-1">
        <div className="flex items-center m-1">
          <div className="p-2 w-14">Level: </div>
          <input
            type="text"
            className="w-16 m-2 p-2 text-yellow-900 rounded"
          ></input>
        </div>
      </div>

      <div className="col-start-8 col-span-1 row-start-1 row-span-1">
        <div className="flex items-center m-1">
          <div className="p-2 m-1 w-14">XP: </div>
          <input
            type="text"
            className="w-16 m-2 p-2 text-yellow-900 rounded"
          ></input>
        </div>
      </div>

      <div className="col-start-7 col-span-1 row-start-2 row-span-1">
        <div className="flex items-center m-1">
          <div className="p-2 w-14">HP: </div>
          <input
            type="text"
            className="w-16 m-2 p-2 text-yellow-900 rounded"
          ></input>
        </div>
      </div>

      <div className="col-start-8 col-span-1 row-start-2 row-span-1">
        <div className="flex items-center m-1">
          <div className="p-2 m-1 w-14">AC: </div>
          <input
            type="text"
            className="w-16 m-2 p-2 text-yellow-900 rounded"
          ></input>
        </div>
      </div>

      <div className="col-start-1 col-span-6 row-start-2 row-span-1">
        <DefensesAndBonuses></DefensesAndBonuses>
      </div>

      <div
        id="inventory"
        className="col-start-5 col-span-4 row-start-3 row-span-1"
      >
        <Inventory></Inventory>
      </div>

      <div className="col-start-1 col-span-4 row-start-3 row-span-1">
        Traits
      </div>
    </div>
  );
}
