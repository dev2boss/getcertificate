import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HiddenPage from "./components/HiddenPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/hidden" element={<HiddenPage />} />
      </Routes>
    </Router>
  );
}

export default App;
