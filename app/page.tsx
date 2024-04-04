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
    <div>
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

      <h2>Calculated Stats</h2>
      <p>Strength Defense: {10 + str}</p>
      <p>Dexterity Defense: {10 + dex}</p>
      <p>Constitution Defense: {10 + con}</p>
      <p>Intelligence Defense: {10 + int}</p>
      <p>Wisdom Defense: {10 + wis}</p>
      <p>Charisma Defense: {10 + cha}</p>

      <button onClick={(e) => setStats()}>Roll Stats</button>

      <Inventory></Inventory>
    </div>
  );
}
