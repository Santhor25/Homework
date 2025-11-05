import React, { useState } from "react";

const CityForm = ({ onAddCity }) => {
  const [cityName, setCityName] = useState("");

  const handleSubmit = () => {
    onAddCity(cityName);
    setCityName("");
  };

  return (
    <div className="form-container">
      <h3>Agregar Ciudad</h3>
      <input
        type="text"
        placeholder="Nombre de la ciudad"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <button onClick={handleSubmit}>Agregar Ciudad</button>
    </div>
  );
};

export default CityForm;
