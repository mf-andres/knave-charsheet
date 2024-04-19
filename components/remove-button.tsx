interface Props {
  onClick: () => void;
}

const RemoveButton: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="w-8">
      <button
        className="m-2 bg-yellow-950 text-yellow-100 rounded-md"
        onClick={() => onClick()}
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
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
    </div>
  );
};
export default RemoveButton;
