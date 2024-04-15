import React, { useState } from "react";
import { physiqueValues } from "./trait-values/physique-values";
import { faceValues } from "./trait-values/face-values";
import { skinValues } from "./trait-values/skin-values";
import { hairValues } from "./trait-values/hair-values";
import { clothingValues } from "./trait-values/clothing-values";
import { virtueValues } from "./trait-values/virtue-values";
import { viceValues } from "./trait-values/vice-values";
import { speechValues } from "./trait-values/speech-values";
import { backgroundValues } from "./trait-values/background-values";
import { misfortuneValues } from "./trait-values/misfortune-values";
import TraitSelect from "./trait-select";

export default function Traits() {
  const [traits, setTraits] = useState({
    physique: physiqueValues[0],
    face: faceValues[0],
    skin: skinValues[0],
    hair: hairValues[0],
    clothing: clothingValues[0],
    virtue: virtueValues[0],
    vice: viceValues[0],
    speech: speechValues[0],
    background: backgroundValues[0],
    misfortune: misfortuneValues[0],
  });

  const handleTraitChange = (traitName: string, value: string) => {
    setTraits((prevTraits) => ({
      ...prevTraits,
      [traitName]: value,
    }));
  };

  const rollTraits = () => {
    const rollD10 = () => Math.floor(Math.random() * 10) + 1;
    const randomizedTraits = {
      physique: physiqueValues[rollD10()],
      face: faceValues[rollD10()],
      skin: skinValues[rollD10()],
      hair: hairValues[rollD10()],
      clothing: clothingValues[rollD10()],
      virtue: virtueValues[rollD10()],
      vice: viceValues[rollD10()],
      speech: speechValues[rollD10()],
      background: backgroundValues[rollD10()],
      misfortune: misfortuneValues[rollD10()],
    };
    setTraits(randomizedTraits);
  };

  return (
    <div className="grid grid-cols-1 place-items-start border-2 m-2 border-yellow-950 rounded shadow">
      <TraitSelect
        traitName="physique"
        traitValue={traits.physique}
        traitValues={physiqueValues}
        handleTraitChange={handleTraitChange}
      ></TraitSelect>

      <TraitSelect
        traitName="face"
        traitValue={traits.face}
        traitValues={faceValues}
        handleTraitChange={handleTraitChange}
      ></TraitSelect>

      <TraitSelect
        traitName="skin"
        traitValue={traits.skin}
        traitValues={skinValues}
        handleTraitChange={handleTraitChange}
      ></TraitSelect>

      <TraitSelect
        traitName="hair"
        traitValue={traits.hair}
        traitValues={hairValues}
        handleTraitChange={handleTraitChange}
      ></TraitSelect>

      <TraitSelect
        traitName="clothing"
        traitValue={traits.clothing}
        traitValues={clothingValues}
        handleTraitChange={handleTraitChange}
      ></TraitSelect>

      <TraitSelect
        traitName="speech"
        traitValue={traits.speech}
        traitValues={speechValues}
        handleTraitChange={handleTraitChange}
      ></TraitSelect>

      <TraitSelect
        traitName="background"
        traitValue={traits.background}
        traitValues={backgroundValues}
        handleTraitChange={handleTraitChange}
      ></TraitSelect>

      <TraitSelect
        traitName="virtue"
        traitValue={traits.virtue}
        traitValues={virtueValues}
        handleTraitChange={handleTraitChange}
      ></TraitSelect>

      <TraitSelect
        traitName="vice"
        traitValue={traits.vice}
        traitValues={viceValues}
        handleTraitChange={handleTraitChange}
      ></TraitSelect>

      <TraitSelect
        traitName="misfortune"
        traitValue={traits.misfortune}
        traitValues={misfortuneValues}
        handleTraitChange={handleTraitChange}
      ></TraitSelect>

      <button
        className="m-2 p-1 bg-yellow-950 text-yellow-100 rounded-md"
        onClick={rollTraits}
      >
        Roll Traits
      </button>
    </div>
  );
}
