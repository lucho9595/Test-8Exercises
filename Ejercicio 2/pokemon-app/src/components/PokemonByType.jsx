import React, { useState } from "react";
import { getTotalPokemonByType } from "../API/api";
import types from "../types.json";
import {Link} from "react-router-dom";

export default function PokemonByType() {
  const [type, setType] = useState("");
  const [total, setTotal] = useState(null);
  const [searchType, setSearchType] = useState("");

  const handleSearch = async () => {
    if (!type || !Object.keys(types).includes(type.toLowerCase())) {
      alert("Ingrese un tipo de Pokémon válido. Los tipos válidos son: " + Object.keys(types).join(", "));
    } else {
      const totalPokemon = await getTotalPokemonByType(type);
      setSearchType(type);
      setTotal(totalPokemon);
      setType("");
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
        <h3 className="mb-3">Buscador total de tipos:</h3>
          <input
            type="text"
            className="form-control mb-3"
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Ingrese el tipo de Pokémon"
          />
          <button className="btn btn-primary me-2" onClick={handleSearch}>
            Buscar
          </button>
          <Link to="/" className="btn btn-primary ml-2">
            Volver al inicio
          </Link>

          {total !== null ? (
            <p>
              Suma total de Pokémon de tipo {searchType}: {total}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};