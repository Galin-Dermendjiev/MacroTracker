import { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import MacroCard from "../components/MacroCard";
import DailyLog from "../components/DailyLog";
import TotalMacros from "../components/TotalMacros";

const MOCK_FOOD = {
  food_name: "Chicken",
  serving_qty: 3,
  serving_unit: "oz",
  serving_weight_grams: 85,
  nf_calories: 187,
  nf_total_fat: 11.11,
  nf_protein: 20.37,
  nf_total_carbohydrate: 0.04,
  alt_measures: [
    { serving_weight: 85, measure: "oz", qty: 3 },
    { serving_weight: 135, measure: "cup", qty: 1 },
    { serving_weight: 100, measure: "g", qty: 1 },
  ],
};

export default function MainLayout() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [portion, setPortion] = useState(null);
  const [dailyLog, setDailyLog] = useState([]);

  const handleSearch = (query) => {
    setSearchResults([
      MOCK_FOOD,
      { ...MOCK_FOOD, food_name: "Grilled Chicken", nf_calories: 220 },
    ]);
    setSelectedFood(null);
    setPortion(null);
  };

  const handleSelectFood = (food) => {
    setSelectedFood(food);
    setPortion(food.alt_measures[0]);
  };

  const handleAddFood = () => {
    if (!selectedFood || !portion) return;

    const scale = portion.serving_weight / selectedFood.serving_weight_grams;

    const adjusted = {
      ...selectedFood,
      nf_calories: selectedFood.nf_calories * scale,
      nf_total_fat: selectedFood.nf_total_fat * scale,
      nf_protein: selectedFood.nf_protein * scale,
      nf_total_carbohydrate: selectedFood.nf_total_carbohydrate * scale,
      portion_desc: `${portion.qty} ${portion.measure}`,
    };

    setDailyLog((prev) => [...prev, adjusted]);
    setSelectedFood(null);
    setPortion(null);
  };

  const handleRemoveFood = (index) => {
    setDailyLog((prev) => prev.filter((_, i) => i !== index));
  };

  const total = {
    calories: dailyLog.reduce((acc, item) => acc + item.nf_calories, 0),
    protein: dailyLog.reduce((acc, item) => acc + item.nf_protein, 0),
    fat: dailyLog.reduce((acc, item) => acc + item.nf_total_fat, 0),
    carbs: dailyLog.reduce((acc, item) => acc + item.nf_total_carbohydrate, 0),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-8 px-4 max-w-4xl mx-auto">
        <SearchBar onSearch={handleSearch} />

        {searchResults.length > 0 && (
          <SearchResults results={searchResults} onSelect={handleSelectFood} />
        )}

        {selectedFood && (
          <div className="my-4">
            <MacroCard food={selectedFood} />

            <div className="mt-4">
              <label className="block mb-2 font-semibold text-gray-700">
                Select Portion Size:
              </label>
              <select
                value={portion ? portion.measure : ""}
                onChange={(e) => {
                  const found = selectedFood.alt_measures.find(
                    (m) => m.measure === e.target.value
                  );
                  setPortion(found);
                }}
                className="p-2 border rounded"
              >
                {selectedFood.alt_measures.map((m, i) => (
                  <option key={i} value={m.measure}>
                    {m.qty} {m.measure}
                  </option>
                ))}
              </select>
              <button
                className="ml-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={handleAddFood}
              >
                Add to Log
              </button>
            </div>
          </div>
        )}

        <section className="mt-8">
          <h2 className="text-xl font-bold mb-2">Today's Log</h2>
          <DailyLog log={dailyLog} onRemove={handleRemoveFood} />

          <h2 className="text-xl font-bold mt-6 mb-2">Daily Totals</h2>
          <TotalMacros total={total} />
        </section>
      </main>
    </div>
  );
}
