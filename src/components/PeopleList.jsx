import React from "react";

const PeopleList = ({ selectedCity, peopleInCity }) => {
  if (!selectedCity) return null;

  return (
    <div className="list-container">
      <h3>Personas que viven en {selectedCity}:</h3>
      {peopleInCity.length > 0 ? (
        <ul>
          {peopleInCity.map((p) => (
            <li key={p.id}>
              {p.id} ({p.age} años)
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay personas registradas en esta ciudad.</p>
      )}
    </div>
  );
};

export default PeopleList;
