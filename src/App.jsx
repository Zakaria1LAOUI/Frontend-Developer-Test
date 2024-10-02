import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharactersList from "./pages/CharactersList/CharactersList";
import CharacterDetails from "./pages/CharacterDetails/CharacterDetails";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
