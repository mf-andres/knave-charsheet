interface Props {}

const HpInput: React.FC<Props> = () => {
  return (
    <div className="grid grid-cols-2 h-20 border-2 m-2 border-yellow-950 rounded shadow">
      <div className="grid grid-cols-2 justify-items-center items-center">
        <div className="p-2 w-20">Max HP: </div>
        <input
          type="text"
          className="w-20 h-14 m-2 p-2 text-yellow-900 text-center rounded"
          placeholder="0"
        ></input>
      </div>
      <div className="grid grid-cols-2 justify-items-center items-center">
        <div className="p-2 w-20">HP: </div>
        <input
          type="text"
          className="w-20 h-14 m-2 p-2 text-yellow-900 text-center rounded"
          placeholder="0"
        ></input>
      </div>
    </div>
  );
};

export default HpInput;
