import { ChangeEvent, useState } from "react";

interface AddItemOverlayProps {
  onClose: any;
  onSubmit: any;
}

const AddItemOverlay: React.FC<AddItemOverlayProps> = ({
  onClose,
  onSubmit,
}) => {
  const [name, setName] = useState(" ");
  const [slots, setSlots] = useState(1);
  const [cost, setCost] = useState(1);
  const [acBonus, setAcBonus] = useState(1);
  const [quality, setQuality] = useState(1);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    setter: Function
  ) => {
    const newValue = parseInt(e.target.value);
    setter(newValue);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit({
      name: name,
      slots: slots,
      cost: cost,
      acBonus: acBonus,
      quality: quality,
    });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-yellow-950 p-6 rounded shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1">
            <label className="m-2 text-yellow-100">Name:</label>
            <input
              type="text"
              className="text-yellow-900 rounded text-base px-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label className="m-2 text-yellow-100">Cost:</label>
            <input
              type="text"
              className="text-yellow-900 rounded text-base px-4"
              value={cost}
              onChange={(e) => handleInputChange(e, setCost)}
            />

            <label className="m-2 text-yellow-100">Slots:</label>
            <input
              type="text"
              className="text-yellow-900 rounded text-base px-4"
              value={slots}
              onChange={(e) => handleInputChange(e, setSlots)}
            />

            <label className="m-2 text-yellow-100">AC Bonus:</label>
            <input
              type="text"
              className="text-yellow-900 rounded text-base px-4"
              value={acBonus}
              onChange={(e) => handleInputChange(e, setAcBonus)}
            />

            <label className="m-2 text-yellow-100">Quality:</label>
            <input
              type="text"
              className="text-yellow-900 rounded text-base px-4"
              value={quality}
              onChange={(e) => handleInputChange(e, setQuality)}
            />
          </div>

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
