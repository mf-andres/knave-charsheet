interface Props {
  state: any;
}

const DownloadButton: React.FC<Props> = ({ state }) => {
  const handleDownload = () => {
    // Convert state to JSON string
    const json = JSON.stringify(state, null, 2);

    // Create a Blob object
    const blob = new Blob([json], { type: "application/json" });

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create a temporary anchor element
    const a = document.createElement("a");
    a.href = url;
    a.download = "state.json";

    // Simulate click on the anchor element to initiate download
    document.body.appendChild(a);
    a.click();

    // Cleanup
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <button
        className="m-2 p-1 bg-yellow-950 text-yellow-100 rounded-md"
        onClick={(e) => handleDownload()}
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
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
      </button>
    </div>
  );
};
export default DownloadButton;
