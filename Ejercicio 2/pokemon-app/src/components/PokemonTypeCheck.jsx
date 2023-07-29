import React, { useState } from "react";
import { checkPokemonType } from "../API/api";
import types from "../types.json";

export default function PokemonTypeCheck() {
  const [pokemonId, setPokemonId] = useState("");
  const [saveId, setSaveId] = useState("");
  const [typeToCheck, setTypeToCheck] = useState("");
  const [saveType, setSaveType] = useState("");
  const [typeCheckResult, setTypeCheckResult] = useState(null);

  const handleCheckType = async () => {
    if (!pokemonId || pokemonId <= 0 || !typeToCheck) {
      alert("Por favor, ingresa un ID de Pokémon válido y un tipo para verificar.");
    } else {
      const pokemonNumber = parseInt(pokemonId);
      const type = types[typeToCheck.toLowerCase()];
      if (!type) {
        alert("Por favor, ingresa un tipo válido.");
      } else {
        const isTypeValid = await checkPokemonType(pokemonNumber, types);
        if (isTypeValid === null) {
          alert("Tipo de Pokémon no válido. Por favor, verifica el tipo ingresado.");
        } else {
          setTypeCheckResult(isTypeValid);
          setSaveId(pokemonId);
          setSaveType(typeToCheck)
          setPokemonId("");
          setTypeToCheck("");
        }
      }
    }
  };

  const handleClear = () => {
    setPokemonId("");
    setTypeToCheck("");
    setTypeCheckResult(null);
  };

  return (
    <div>
      <input
        type="text"
        value={pokemonId}
        onChange={(e) => setPokemonId(e.target.value)}
        placeholder="Ingresa el ID del Pokémon"
      />
      <input
        type="text"
        value={typeToCheck}
        onChange={(e) => setTypeToCheck(e.target.value)}
        placeholder="Ingresa el tipo de Pokémon a verificar (en inglés)"
      />
      <button onClick={handleCheckType}>Verificar Tipo</button>
      <button onClick={handleClear}>Limpiar</button>
      {typeCheckResult !== null && (
        <p>
          El Pokémon con ID {saveId} {typeCheckResult ? "tiene" : "no tiene"} el tipo "{saveType}".
        </p>
      )}
    </div>
  );
};