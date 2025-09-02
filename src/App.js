import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const handleInputChange = (e) => {
    setCategory(e.target.value);
  };

  const handleAddCategory = () => {
    if (category.trim().length === 0) return;

    setCategories([...categories, category]);
    setCategory("");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Challenge 04</h2>

      <input
        type="text"
        value={category}
        onChange={handleInputChange}
        placeholder="Escribe una categoría"
        className="border p-2 rounded mr-2"
      />

      <button
        onClick={handleAddCategory}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Agregar
      </button>

      <Child categories={categories} />
    </div>
  );
}

export default Parent;