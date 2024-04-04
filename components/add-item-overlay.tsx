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
      <div className="bg-white p-6 rounded shadow-lg">
        <form onSubmit={handleSubmit}>
          <label>
            Item Name:
            <input type="text" />
          </label>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
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
