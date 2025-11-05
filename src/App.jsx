import React, { useState } from "react";
import "./App.css";
import CityForm from "./components/CityForm";
import PersonForm from "./components/PersonForm";
import CitySelector from "./components/CitySelector";
import PeopleList from "./components/PeopleList";
import GraphView from "./components/GraphView";

const App = () => {
  const [cities, setCities] = useState([
    { id: "Bogotá" },
    { id: "Medellín" },
    { id: "Cali" },
  ]);

  const [people, setPeople] = useState([
    { id: "Santiago", age: 25, city: "Bogotá" },
    { id: "Laura", age: 28, city: "Medellín" },
    { id: "Andrés", age: 22, city: "Bogotá" },
    { id: "María", age: 30, city: "Cali" },
  ]);

  const [selectedCity, setSelectedCity] = useState("");

  const addCity = (cityName) => {
    if (!cityName.trim()) return alert("Escribe un nombre de ciudad.");
    if (cities.find((c) => c.id.toLowerCase() === cityName.toLowerCase())) {
      alert("La ciudad ya existe.");
      return;
    }
    setCities([...cities, { id: cityName }]);
  };

  const addPerson = (name, age, city) => {
    if (!name.trim() || !age.trim() || !city.trim()) {
      alert("Completa todos los campos.");
      return;
    }

    if (people.find((p) => p.id.toLowerCase() === name.toLowerCase())) {
      alert("Esa persona ya existe.");
      return;
    }

    if (!cities.find((c) => c.id.toLowerCase() === city.toLowerCase())) {
      setCities((prev) => [...prev, { id: city }]);
    }

    setPeople((prev) => [
      ...prev,
      { id: name, age: parseInt(age), city: city },
    ]);
  };

  const peopleInCity = people.filter((p) => p.city === selectedCity);

  return (
    <div className="app-container">
      <div className="left-column">
        <h1>Grafo de Personas y Ciudades</h1>

        <CityForm onAddCity={addCity} />
        <PersonForm onAddPerson={addPerson} />
        <CitySelector
          cities={cities}
          selectedCity={selectedCity}
          onChangeCity={setSelectedCity}
        />
        <PeopleList selectedCity={selectedCity} peopleInCity={peopleInCity} />
        <footer>Hecho por Santiago Torralba</footer>
      </div>

      <div className="right-column">
        <GraphView people={people} cities={cities} />
      </div>
    </div>
  );
};

export default App;