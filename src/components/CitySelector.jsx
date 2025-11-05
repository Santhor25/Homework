import React from "react";

const CitySelector = ({ cities, selectedCity, onChangeCity }) => (
  <div className="selector-container">
    <label>
      <b>Selecciona una ciudad:</b>
      <select
        value={selectedCity}
        onChange={(e) => onChangeCity(e.target.value)}
      >
        <option value="">Elegir</option>
        {cities.map((city) => (
          <option key={city.id} value={city.id}>
            {city.id}
          </option>
        ))}
      </select>
    </label>
  </div>
);

export default CitySelector;
