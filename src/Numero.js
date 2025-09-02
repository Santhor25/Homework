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