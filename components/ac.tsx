interface Props {}

const Ac: React.FC<Props> = () => {
  return (
    <div className="flex items-center m-1">
      <div className="p-2 m-1 w-14">AC: </div>
      <input
        type="text"
        className="w-16 m-2 p-2 text-yellow-900 rounded"
      ></input>
    </div>
  );
};

export default Ac;
