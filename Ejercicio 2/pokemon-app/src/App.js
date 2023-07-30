import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./page/Home";
import PokemonByType from "./components/PokemonByType"; // Utiliza PascalCase aquí
import PokemonByTwoTypes from "./components/PokemonByTwoTypes"; // Utiliza PascalCase aquí
import PokemonByNumber from "./components/PokemonByNumber"; // Utiliza PascalCase aquí
import PokemonSorting from "./components/PokemonSorting"; // Utiliza PascalCase aquí
import PokemonTypeCheck from "./components/PokemonTypeCheck"; // Utiliza PascalCase aquí

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/PokemonByType" element={<PokemonByType />} /> {/* Utiliza PascalCase aquí */}
        <Route path="/PokemonByTwoTypes" element={<PokemonByTwoTypes />} /> {/* Utiliza PascalCase aquí */}
        <Route path="/PokemonByNumber" element={<PokemonByNumber />} /> {/* Utiliza PascalCase aquí */}
        <Route path="/PokemonSorting" element={<PokemonSorting />} /> {/* Utiliza PascalCase aquí */}
        <Route path="/PokemonTypeCheck" element={<PokemonTypeCheck />} /> {/* Utiliza PascalCase aquí */}
      </Routes>
    </Router>
  );
}