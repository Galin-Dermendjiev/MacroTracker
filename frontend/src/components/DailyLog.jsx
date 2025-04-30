export default function DailyLog({ log, onRemove }) {
    if (log.length === 0) {
      return <p className="text-gray-500">No food added yet.</p>;
    }
  
    return (
      <ul className="space-y-2">
        {log.map((item, index) => (
          <li
            key={index}
            className="bg-white shadow p-4 rounded flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{item.food_name}</p>
              <p className="text-sm text-gray-600">{item.portion_desc}</p>
              <p className="text-sm text-gray-600">
                {item.nf_calories.toFixed(0)} kcal • {item.nf_protein.toFixed(1)}g protein •{" "}
                {item.nf_total_fat.toFixed(1)}g fat • {item.nf_total_carbohydrate.toFixed(1)}g carbs
              </p>
            </div>
            <button
              onClick={() => onRemove(index)}
              className="text-red-600 hover:text-red-800 font-bold"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    );
  }
  