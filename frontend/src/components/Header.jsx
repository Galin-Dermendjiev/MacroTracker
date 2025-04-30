export default function Header() {
  return (
    <header className="bg-blue-500 flex justify-between p-3 items-center">
      <h1 className="text-white font-bold text-2xl">MacroTracker</h1>
      <div className="hover:bg-blue-700 py-3 px-4 rounded-2xl flex items-center justify-center">
        <button className="text-white font-bold text-2xl cursor-pointer">
          Login
        </button>
      </div>
    </header>
  );
}
