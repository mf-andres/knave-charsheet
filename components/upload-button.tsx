import { ChangeEvent, useRef, useState } from "react";

interface Props {
  setState: any;
}

const UploadButton: React.FC<Props> = ({ setState }) => {
  const [
    setCharName,
    setLevel,
    setXp,
    setMaxHp,
    setHp,
    setCon,
    setStr,
    setDex,
    setInt,
    setWis,
    setChar,
    setAc,
    setTraits,
    setItems,
  ] = setState;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      if (!e.target) return;
      try {
        const data = JSON.parse(e.target.result as string);
        setData(data);
      } catch (error) {
        // TODO deal with errors
        console.error("Error parsing JSON file:", error);
      }
    };

    reader.readAsText(file);
  };

  const setData = (data: any) => {
    setCharName(data.charName);
    setLevel(data.level);
    setXp(data.xp);
    setMaxHp(data.maxHp);
    setHp(data.hp);
    setCon(data.con);
    setStr(data.str);
    setDex(data.dex);
    setInt(data.int);
    setWis(data.wis);
    setChar(data.char);
    setAc(data.ac);
    setTraits(data.traits);
    setItems(data.items);
  };

  return (
    <div>
      <input
        className="hidden"
        type="file"
        accept=".json"
        ref={fileInputRef}
        onChange={(e) => handleFileUpload(e)}
      />
      <button
        className="m-2 p-1 bg-yellow-950 text-yellow-100 rounded-md"
        onClick={() => handleClick()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
          />
        </svg>
      </button>
    </div>
  );
};
export default UploadButton;
