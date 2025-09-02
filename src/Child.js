function Child({ categories }) {
    return (
      <div className="mt-4">
        <h3 className="font-semibold">Categorías:</h3>
        <ul className="list-disc list-inside">
          {categories.map((cat, i) => (
            <li key={i}>{cat}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Child;