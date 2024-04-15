interface AddItemOverlayProps {
  onClose: any;
  onSubmit: any;
}

const AddItemOverlay: React.FC<AddItemOverlayProps> = ({
  onClose,
  onSubmit,
}) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit({
      name: "addedItem",
      slots: 1,
      cost: 1,
      acBonus: 1,
      quality: 1,
    });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-yellow-950 p-6 rounded shadow-lg">
        <form onSubmit={handleSubmit}>
          <label className="m-2 text-yellow-100">Item Name:</label>
          <input
            type="text"
            className="text-yellow-900 rounded text-base text-center"
          />
          <div className="m-2 flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="m-2 bg-yellow-200 text-yellow-950 px-4 py-2  rounded hover:bg-yellow-400 "
            >
              Cancel
            </button>
            <button
              type="submit"
              className="m-2 bg-yellow-500 text-yellow-950 px-4 py-2  rounded hover:bg-yellow-400 "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItemOverlay;
