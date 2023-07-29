import React, { useState } from "react";
import { getTotalPokemonByType } from "../API/api";
import types from "../types.json";

export default function TotalPokemonByType() {
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
    <div>
      <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
      <button onClick={handleSearch}>Buscar</button>
      {total !== null ? <p>Suma total de Pokémon de tipo {searchType}: {total}</p> : null}
    </div>
  );
};