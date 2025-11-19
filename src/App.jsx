import { useState } from "react";
import { useCityGraph } from "./context/CityGraphContext";

import CityGraphView from "./components/CityGraphView";
import CityForm from "./components/CityForm";
import CityDetails from "./components/CityDetails";
import GreenZoneTreeGraph from "./components/GreenZoneTreeGraph";

import "./App.scss";

export default function App() {
  const { graph } = useCityGraph();
  const [selected, setSelected] = useState(null);
  const selectedCity = selected ? graph[selected] : null;

  return (
    <div className="appContainer">
      <div className="mainContent">
        <div className="leftPanel">
          <h1>Mapa de Ciudades</h1>
          <CityForm />
          <div className="graphContainer">
            <CityGraphView graph={graph} onSelectCity={setSelected} />
          </div>
        </div>

        <div className="rightPanel">
          {!selectedCity ? (
            <p>Haz clic en una ciudad del grafo para ver sus zonas verdes.</p>
          ) : (
            <>
              <CityDetails city={selectedCity} />
              <h3 style={{ marginTop: "1rem" }}>Árbol de Zonas Verdes</h3>
              <GreenZoneTreeGraph zones={selectedCity.greenZones} />
            </>
          )}
        </div>
      </div>

      <footer className="footer">
        <p>Desarrollado por Santiago Torralba</p>
      </footer>
    </div>
  );
}
