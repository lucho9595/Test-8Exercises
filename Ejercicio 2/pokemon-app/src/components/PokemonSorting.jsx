import React, { useState } from "react";
import { getPokemonDetailsById } from "../API/api";

export default function PokemonSorting() {
  const [pokemonId, setPokemonId] = useState("");
  const [setSavePokemonId] = useState("");
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [selectedDisplay, setSelectedDisplay] = useState("name");

  const handleSearch = async () => {
    const parsedId = parseInt(pokemonId);
    if (parsedId <= 0 || isNaN(parsedId)) {
      alert("Please enter a valid Pokémon ID (greater than 0).");
    } else {
      try {
        const pokemonDetails = await getPokemonDetailsById(parsedId);
        setPokemonDetails(pokemonDetails);
        setSavePokemonId(parsedId);
        setPokemonId("")
      } catch (error) {
        alert("Pokemon no encontrado, ingresa un ID valido");
      }
    }
  };

  const handleDisplayChange = (event) => {
    setSelectedDisplay(event.target.value);
  };

  const handleClear = () => {
    setPokemonId("");
    setPokemonDetails(null);
    setSelectedDisplay("name");
  };

  return (
    <div>
      <input
        type="number"
        value={pokemonId}
        onChange={(e) => setPokemonId(e.target.value)}
        placeholder="Eleji el ID del pokemon"
      />
      <button onClick={handleSearch}>Buscar</button>
      <button onClick={handleClear}>Limpiar</button>
      {pokemonDetails && (
        <div>
          <h2>Has encontrado a {pokemonDetails.name}!</h2>
          <select value={selectedDisplay} onChange={handleDisplayChange}>
            <option value="name">Name</option>
            <option value="type">Type</option>
            <option value="weight">Weight</option>
          </select>
          {selectedDisplay === "name" && <p>Name: {pokemonDetails.name}</p>}
          {selectedDisplay === "type" && (
            <p>Type: {pokemonDetails.types[0].type.name}</p>
          )}
          {selectedDisplay === "weight" && <p>Weight: {pokemonDetails.weight}</p>}
        </div>
      )}
    </div>
  );
};