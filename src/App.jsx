
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MusicPlayer from "./pages/MusicPlayer";
import BrowserHistory from "./pages/BrowserHistory";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/music">Reproductor</Link> |{" "}
        <Link to="/history/inicio">Historial</Link>
      </nav>
      <Routes>
        <Route path="/music" element={<MusicPlayer />} />
        <Route path="/history/:page" element={<BrowserHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
