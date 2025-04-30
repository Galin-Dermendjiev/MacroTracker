export default function SearchResults({ results, onSelect }) {
    return (
      <div className="w-full max-w-2xl mx-auto mt-4 grid gap-4">
        {results.map((food, idx) => (
          <div 
            key={idx} 
            className="bg-white p-4 rounded-xl shadow-md hover:bg-blue-50 cursor-pointer transition"
            onClick={() => onSelect(food)}
          >
            <h2 className="font-semibold text-lg">{food.food_name}</h2>
            <p className="text-gray-600">{food.serving_qty} {food.serving_unit} - {food.nf_calories} kcal</p>
          </div>
        ))}
      </div>
    );
  }
  