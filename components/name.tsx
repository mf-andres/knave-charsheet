import { Dispatch, SetStateAction } from "react";

interface Props {
  charName: string;
  setCharName: Dispatch<SetStateAction<string>>;
}

const NameInput: React.FC<Props> = ({ charName, setCharName }) => {
  return (
    <div className="flex items-center m-1 bg-yellow-950 text-yellow-200 rounded">
      <div className="p-2">Name:</div>
      <input
        type="text"
        className="grow m-2 p-2 text-yellow-900 rounded"
        value={charName}
        onChange={(e) => setCharName(e.target.value)}
      ></input>
    </div>
  );
};

export default NameInput;
