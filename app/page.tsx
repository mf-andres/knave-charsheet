"use client";

import NameInput from "@/components/name";
import DefensesAndBonuses from "@/components/defenses-and-bonuses";
import Traits from "@/components/traits";
import Inventory from "@/components/inventory";
import HpInput from "@/components/hp";
import LevelAndXP from "@/components/level-and-xp";

export default function Home() {
  // TODO, complete overlay form, complete add item feat,
  //  get taken slots, edit item fields, make shareable, roll hp
  //  level up

  return (
    <div className="grid grid-cols-3 grid-flow-row gap-1 bg-yellow-200">
      <div className="col-start-1 col-span-2 row-start-1">
        <NameInput></NameInput>
      </div>

      {/* TODO refactor level xp, hp and ac are similar looking input */}
      <div className="col-start-3 row-start-1">
        <LevelAndXP></LevelAndXP>
      </div>

      <div className="col-start-1 row-start-2">
        <HpInput></HpInput>
      </div>

      <div className="col-start-1 col-span-2 row-start-3">
        <DefensesAndBonuses></DefensesAndBonuses>
      </div>

      <div className="col-start-1 row-start-4">
        <Traits></Traits>
      </div>

      <div className="col-start-2 col-span-2 row-start-4">
        <Inventory></Inventory>
      </div>
    </div>
  );
}
