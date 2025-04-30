export default function TotalMacros({ total }) {
    return (
      <div className="max-w-2xl mx-auto mt-6 px-4 bg-white p-4 rounded-xl shadow">
        <h3 className="text-xl font-bold mb-2">Daily Totals</h3>
        <div className="flex justify-between">
          <span>Calories: {total.calories} kcal</span>
          <span>Protein: {total.protein}g</span>
          <span>Fat: {total.fat}g</span>
          <span>Carbs: {total.carbs}g</span>
        </div>
      </div>
    );
  }
  