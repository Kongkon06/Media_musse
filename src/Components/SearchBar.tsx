import { useState } from 'react';

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-400"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export function SearchBar(){
  const [query, setQuery] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl">
      <div className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 pl-10 text-sm bg-white border rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
          placeholder="Search..."
        />
        <span className="absolute left-3">
          <SearchIcon />
        </span>
        <button 
          type="submit"
          className="absolute right-2 px-4 py-1 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
};
;