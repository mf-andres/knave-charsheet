"use client";

import NameInput from "@/components/name";
import DefensesAndBonuses from "@/components/defenses-and-bonuses";
import Traits from "@/components/traits";
import Inventory from "@/components/inventory";
import HpInput from "@/components/hp";
import LevelAndXP from "@/components/level-and-xp";
import { useState } from "react";
import DownloadButton from "@/components/download-button";
import UploadButton from "@/components/upload-button";
import { ItemDO } from "@/components/models/item";

export default function Home() {
  // TODO
  //  delete items, make shareable
  const [charName, setCharName] = useState("");
  const [level, setLevel] = useState(0);
  const [xp, setXp] = useState(0);
  const [maxHp, setMaxHp] = useState(0);
  const [hp, setHp] = useState(0);
  const [con, setCon] = useState(0);
  const [str, setStr] = useState(0);
  const [dex, setDex] = useState(0);
  const [int, setInt] = useState(0);
  const [wis, setWis] = useState(0);
  const [char, setChar] = useState(0);
  const [ac, setAc] = useState(0);
  const [items, setItems] = useState<ItemDO[]>([
    {
      id: "1",
      name: "Rations (1 day)",
      slots: 1,
      cost: 5,
      acBonus: 0,
      quality: 0,
    },
    {
      id: "2",
      name: "Rations (1 day)",
      slots: 1,
      cost: 5,
      acBonus: 0,
      quality: 0,
    },
  ]);
  const state = {
    state: "state",
    charName,
    level,
    xp,
    maxHp,
    hp,
    str,
    dex,
    con,
    int,
    wis,
    char,
    ac,
  };

  return (
    <div className="grid grid-cols-3 grid-flow-row gap-1 bg-yellow-200">
      <div className="col-start-1 col-span-2 row-start-1">
        <NameInput charName={charName} setCharName={setCharName}></NameInput>
      </div>

      <div className="col-start-3 row-start-1">
        <div className="flex justify-around justify-items-center items-center">
          <LevelAndXP
            level={level}
            setLevel={setLevel}
            xp={xp}
            setXp={setXp}
          ></LevelAndXP>
          <DownloadButton state={state}></DownloadButton>
          <UploadButton></UploadButton>
        </div>
      </div>

      <div className="col-start-1 row-start-2">
        <HpInput maxHpState={[maxHp, setMaxHp]} hpState={[hp, setHp]}></HpInput>
      </div>

      <div className="col-start-1 col-span-2 row-start-3">
        <DefensesAndBonuses
          conState={[con, setCon]}
          strState={[str, setStr]}
          dexState={[dex, setDex]}
          intState={[int, setInt]}
          wisState={[wis, setWis]}
          charState={[char, setChar]}
          acState={[ac, setAc]}
          items={items}
        ></DefensesAndBonuses>
      </div>

      <div className="col-start-1 row-start-4">
        <Traits></Traits>
      </div>

      <div className="col-start-2 col-span-2 row-start-4">
        <Inventory con={con} items={items} setItems={setItems}></Inventory>
      </div>
    </div>
  );
}
