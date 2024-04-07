"use client";

import Inventory from "@/components/inventory";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [str, setStr] = useState(0);
  const [dex, setDex] = useState(0);
  const [con, setCon] = useState(0);
  const [int, setInt] = useState(0);
  const [wis, setWis] = useState(0);
  const [cha, setCha] = useState(0);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    setter: Function
  ) => {
    const newValue = parseInt(e.target.value);
    setter(newValue);
  };

  const setStats = () => {
    setStr(rollStat());
    setDex(rollStat());
    setCon(rollStat());
    setInt(rollStat());
    setWis(rollStat());
    setCha(rollStat());
  };

  const rollStat = () => {
    return Math.min(rollD(6), rollD(6), rollD(6));
  };

  const rollD = (n: number) => {
    return Math.floor(Math.random() * n) + 1;
  };

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
          <div className="p-2">Level: </div>
          <input
            type="text"
            className="w-16 m-2 p-2 text-yellow-900 rounded"
          ></input>
        </div>
      </div>

      <div className="col-start-8 col-span-1 row-start-1 row-span-1">
        <div className="flex items-center m-1">
          <div className="p-2 m-1">XP: </div>
          <input
            type="text"
            className="w-16 m-2 p-2 text-yellow-900 rounded"
          ></input>
        </div>
      </div>

      <div className="col-start-7 col-span-1 row-start-2 row-span-1">
        <div className="flex items-center m-1">
          <div className="p-2">HP: </div>
          <input
            type="text"
            className="w-16 m-2 p-2 text-yellow-900 rounded"
          ></input>
        </div>
      </div>

      <div className="col-start-8 col-span-1 row-start-2 row-span-1">
        <div className="flex items-center m-1">
          <div className="p-2">AC: </div>
          <input
            type="text"
            className="w-16 m-2 p-2 text-yellow-900 rounded"
          ></input>
        </div>
      </div>

      <div className="col-start-1 col-span-6 row-start-2 row-span-1">
        <div className="">
          <h1>Character Stats</h1>
          <form>
            <label>Strength: </label>
            <input
              type="number"
              value={str}
              onChange={(e) => handleInputChange(e, setStr)}
            />
            <br />

            <label>Dexterity: </label>
            <input
              type="number"
              value={dex}
              onChange={(e) => handleInputChange(e, setDex)}
            />
            <br />

            <label>Constitution: </label>
            <input
              type="number"
              value={con}
              onChange={(e) => handleInputChange(e, setCon)}
            />
            <br />

            <label>Intelligence: </label>
            <input
              type="number"
              value={int}
              onChange={(e) => handleInputChange(e, setInt)}
            />
            <br />

            <label>Wisdom: </label>
            <input
              type="number"
              value={wis}
              onChange={(e) => handleInputChange(e, setWis)}
            />
            <br />

            <label>Charisma: </label>
            <input
              type="number"
              value={cha}
              onChange={(e) => handleInputChange(e, setCha)}
            />
            <br />
          </form>
        </div>

        <br></br>

        <div className="flex-col">
          <h2>Calculated Stats</h2>
          <p>Strength Defense: {10 + str}</p>
          <p>Dexterity Defense: {10 + dex}</p>
          <p>Constitution Defense: {10 + con}</p>
          <p>Intelligence Defense: {10 + int}</p>
          <p>Wisdom Defense: {10 + wis}</p>
          <p>Charisma Defense: {10 + cha}</p>

          <button className="bg-blue-300" onClick={(e) => setStats()}>
            Roll Stats
          </button>
        </div>
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
