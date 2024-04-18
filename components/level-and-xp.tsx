interface Props {}

const LevelAndXP: React.FC<Props> = () => {
  return (
    <div className="grid grid-cols-2 justify-items-center">
      <div className="flex items-center m-1">
        <div className="p-2 w-14">Level: </div>
        <input
          type="text"
          className="w-16 m-2 p-2 text-yellow-900 text-center rounded"
          placeholder="0"
        ></input>
      </div>

      <div className="flex items-center m-1">
        <div className="p-2 m-1 w-14">XP: </div>
        <input
          type="text"
          className="w-16 m-2 p-2 text-yellow-900 text-center rounded"
          placeholder="0"
        ></input>
      </div>
    </div>
  );
};

export default LevelAndXP;
