export default function Search() {
  return (
    <div className="w-full rounded-lg overflow-hidden border flex items-center p-2 shadow-md">
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
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <input
        type="text"
        placeholder="Search notes"
        className="w-full ml-2 text-base py-1 outline-none border-none bg-transparent"
      />
    </div>
  );
}
