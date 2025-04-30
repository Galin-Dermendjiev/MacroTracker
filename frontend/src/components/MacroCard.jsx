export default function MacroCard({ food }) {
    return (
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-xl mx-auto mt-6">
        <h2 className="text-xl font-bold mb-4">{food.food_name}</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-800">
          <p><strong>Calories:</strong> {food.nf_calories}</p>
          <p><strong>Protein:</strong> {food.nf_protein}g</p>
          <p><strong>Fat:</strong> {food.nf_total_fat}g</p>
          <p><strong>Carbs:</strong> {food.nf_total_carbohydrate}g</p>
        </div>
      </div>
    );
  }
  