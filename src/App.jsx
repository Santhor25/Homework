import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Settings from "./pages/Settings";
import Security from "./pages/Security";
import Activity from "./pages/Activity";
import About from "./pages/About";

import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", height: "100vh", backgroundColor: "#f9fafb" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "2rem" }}>
          <Routes>
            <Route path="/" element={<h2>Bienvenido al sistema</h2>} />
            <Route path="/help/contact" element={<Contact />} />
            <Route path="/help/faq" element={<FAQ />} />
            <Route path="/profile/settings" element={<Settings />} />
            <Route path="/profile/security" element={<Security />} />
            <Route path="/profile/activity" element={<Activity />} />
            <Route path="/home/about" element={<About />} />
            <Route path="/home/services" element={<Services />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
