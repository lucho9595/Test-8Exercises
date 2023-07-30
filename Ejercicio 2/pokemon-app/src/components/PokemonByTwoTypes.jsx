import React, { useState } from "react";
import { getPokemonByTwoTypes } from "../API/api";
import typeTranslations from "../types.json";
import { Link } from "react-router-dom";

export default function PokemonByTwoTypes() {
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");
  const [pokemons, setPokemons] = useState([]);

  const handleSearch = async () => {
    if (!type1 && !type2) {
      alert("Seleccione ambos tipos de Pokémon");
    } else if (!type1) {
      alert("Falta seleccionar el tipo 1");
    } else if (!type2) {
      alert("Falta seleccionar el tipo 2");
    } else {
      const translatedType1 = typeTranslations[type1.toLowerCase()];
      const translatedType2 = typeTranslations[type2.toLowerCase()];

      try {
        const pokemonList = await getPokemonByTwoTypes(
          translatedType1,
          translatedType2
        );
        setPokemons(pokemonList);
      } catch (error) {
        // Podemos mostrar el error en la consola para fines de depuración
        console.error("Error al obtener los Pokémon:", error);
        // También podríamos mostrar un mensaje genérico al usuario
        alert(
          "Se produjo un error al obtener los Pokémon. Por favor, inténtalo de nuevo."
        );
      }
    }
  };

  const handleClear = () => {
    setType1("");
    setType2("");
    setPokemons([]);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
        <h3>Buscador de pokemons con tipos iguales:</h3>

          <div className="d-flex justify-content-center mb-3">
            <select
              className="form-select mr-2"
              value={type1}
              onChange={(e) => setType1(e.target.value)}
            >
              <option value="">Seleccione un tipo de Pokémon</option>
              {Object.keys(typeTranslations).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <select
              className="form-select"
              value={type2}
              onChange={(e) => setType2(e.target.value)}
            >
              <option value="">Seleccione otro tipo de Pokémon</option>
              {Object.keys(typeTranslations).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="d-flex justify-content-center">
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

          {pokemons.length > 0 ? (
            <div>
              <h2>
                Pokémon que cumplen con los tipos {type1} y {type2}:
              </h2>
              <ul>
                {pokemons.map((pokemon) => (
                  <li key={pokemon.name}>{pokemon.name}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};