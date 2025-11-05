import React, { useState } from "react";

const PersonForm = ({ onAddPerson }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = () => {
    onAddPerson(name, age, city);
    setName("");
    setAge("");
    setCity("");
  };

  return (
    <div className="form-container">
      <h3>Agregar Persona</h3>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Edad"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ciudad"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSubmit}>Agregar Persona</button>
    </div>
  );
};

export default PersonForm;

