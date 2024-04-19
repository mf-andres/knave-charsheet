import { ChangeEvent, useRef, useState } from "react";

interface Props {}

const UploadButton: React.FC<Props> = () => {
  const [jsonData, setJsonData] = useState(null);
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
        setJsonData(data);
      } catch (error) {
        // TODO deal with errors
        console.error("Error parsing JSON file:", error);
      }
    };

    reader.readAsText(file);
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
