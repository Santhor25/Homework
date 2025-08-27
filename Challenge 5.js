"Parent:"
import React, { useState, useCallback } from "react";
import Numero from "./Numero";

const App = () => {
  const [contador, setContador] = useState(0);

  const incrementar = useCallback((n) => {
    setContador((prev) => prev + n);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">CHALLENGE 05</h1>
          <p className="text-gray-600">Optimización con React.memo y useCallback</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Contador: <span className="text-emerald-600">{contador}</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            <Numero valor={1} onClick={incrementar} />
            <Numero valor={5} onClick={incrementar} />
            <Numero valor={10} onClick={incrementar} />
            <Numero valor={50} onClick={incrementar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

"Child:"
import React from 'react';

const Numero = React.memo(({ valor, onClick }) => {
  console.log(`Renderizando botón ${valor}`);

  return (
    <button
      onClick={() => onClick(valor)}
      className="px-6 py-3 bg-emerald-500 text-white rounded-lg shadow-md hover:bg-emerald-600 transition-colors duration-200 font-medium"
    >
      +{valor}
    </button>
  );
});

export default Numero;
