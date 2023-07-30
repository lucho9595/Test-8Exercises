import React, { useState } from "react";
import { getPokemonDetailsById } from "../API/api";
import {Link} from "react-router-dom";

export default function PokemonSorting() {
  const [pokemonId, setPokemonId] = useState("");
  const [savePokemonId, setSavePokemonId] = useState("");
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [selectedDisplay, setSelectedDisplay] = useState("name");

  const handleSearch = async () => {
    const parsedId = parseInt(pokemonId);
    if (parsedId <= 0 || isNaN(parsedId) || parsedId >= 1011) {
      alert("Ingresa un valor a partir de 1 hasta 1010y no ingrese letras");
    } else {
      const pokemonDetails = await getPokemonDetailsById(parsedId);
      setPokemonDetails(pokemonDetails);
      setSavePokemonId(parsedId);
      setPokemonId("")
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
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
        <h3 className="mb-3">Detalle pokemon:</h3>

          <input
            type="text"
            className="form-control mb-3"
            value={pokemonId}
            onChange={(e) => setPokemonId(e.target.value)}
            placeholder="Ingrese el ID del Pokémon"
          />
          <div className="d-flex justify-content-center mb-3">
            <button className="btn btn-primary mr-2" onClick={handleSearch}>
              Buscar
            </button>
            <button className="btn btn-secondary" onClick={handleClear}>
              Limpiar
            </button>
            <Link to="/" className="btn btn-primary ml-2">
              Volver al inicio
            </Link>

          </div>


          {pokemonDetails && (
            <div>
              <h2>Has encontrado a {pokemonDetails.name}!</h2>
              <select
                className="form-select mb-3"
                value={selectedDisplay}
                onChange={handleDisplayChange}
              >
                <option value="name">Name</option>
                <option value="type">Type</option>
                <option value="weight">Weight</option>
              </select>
              {selectedDisplay === "name" && (
                <p>Name: {pokemonDetails.name}</p>
              )}
              {selectedDisplay === "type" && (
                <p>Type: {pokemonDetails.types[0].type.name}</p>
              )}
              {selectedDisplay === "weight" && (
                <p>Weight: {pokemonDetails.weight}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}