export default function SearchBar({ onSearch }) {
    return (
      <div className="w-full max-w-2xl mx-auto mt-6 px-4">
        <input
          type="text"
          placeholder="Search for a food..."
          className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          onKeyDown={(e) => e.key === 'Enter' && onSearch(e.target.value)}
        />
      </div>
    );
  }
  