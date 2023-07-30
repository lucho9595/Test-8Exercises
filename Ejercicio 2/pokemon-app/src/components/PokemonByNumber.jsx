import React, { useState } from "react";
import { getPokemonByNumber } from "../API/api";
import { Link } from "react-router-dom";

export default function PokemonByNumber() {
  const [pokemonNumber, setPokemonNumber] = useState("");
  const [pokemonStats, setPokemonStats] = useState(null);
  const [searchedPokemonNumber, setSearchedPokemonNumber] = useState("");
  const [namePokemon, setNamePokemon] = useState("");

  const handleSearch = async () => {
    if (!pokemonNumber || pokemonNumber <= 0 || pokemonNumber >= 1011) {
      alert("Ingrese un número de Pokémon desde 1 hasta 1010");
    } else {
      try {
        const pokemonDetails = await getPokemonByNumber(pokemonNumber);
        const baseStats = extractBaseStats(pokemonDetails);
        setPokemonStats(baseStats);
        setSearchedPokemonNumber(pokemonNumber);
        setPokemonNumber("");
      } catch (error) {
        alert(
          "El número de Pokémon no es válido. Por favor, inténtalo de nuevo."
        );
      }
    }
  };

  const extractBaseStats = (pokemonDetails) => {
    const baseStats = {};
    if (
      pokemonDetails &&
      pokemonDetails.stats &&
      pokemonDetails.stats.length === 6
    ) {
      setNamePokemon(pokemonDetails.forms[0].name);
      pokemonDetails.stats.forEach((stat) => {
        baseStats[stat.stat.name] = stat.base_stat;
      });
    }
    return baseStats;
  };

  const handleClean = () => {
    setPokemonNumber("");
    setPokemonStats(null);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h3>Buscar los primeros 6 Stats:</h3>

          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              value={pokemonNumber}
              onChange={(e) => setPokemonNumber(e.target.value)}
              placeholder="Ingrese el número de Pokémon"
            />
          </div>

          <div className="d-flex justify-content-center mb-3">
            <button className="btn btn-primary mr-2" onClick={handleSearch}>
              Buscar
            </button>
            <button className="btn btn-secondary" onClick={handleClean}>
              Limpiar
            </button>
            <Link to="/" className="btn btn-primary ml-2">
              Volver al inicio
            </Link>

          </div>

          {pokemonStats && Object.keys(pokemonStats).length === 6 ? (
            <div>
              <h2>
                Stats base del Pokémon {namePokemon} con el número{" "}
                {searchedPokemonNumber}:
              </h2>
              <ul className="list-group">
                {Object.keys(pokemonStats).map((statName) => (
                  <li className="list-group-item" key={statName}>
                    {statName}: {pokemonStats[statName]}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}