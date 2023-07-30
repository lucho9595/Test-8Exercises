import React, { useState } from "react";
import { checkPokemonType } from "../API/api";
import types from "../types.json";
import { Link } from "react-router-dom";

export default function PokemonTypeCheck() {
  const [pokemonId, setPokemonId] = useState("");
  const [saveId, setSaveId] = useState("");
  const [typeToCheck, setTypeToCheck] = useState("");
  const [saveType, setSaveType] = useState("");
  const [typeCheckResult, setTypeCheckResult] = useState(null);

  const handleCheckType = async () => {
    if (!pokemonId || pokemonId <= 0 || !typeToCheck || pokemonId >= 1011) {
      alert("Por favor, ingresa un ID de Pokémon válido entre 1 y 1010 y un tipo para verificar.");
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
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
        <h3 className="mb-3">Verificar si el pokemon tiene ese tipo:</h3>

          <input
            type="text"
            className="form-control mb-3"
            value={pokemonId}
            onChange={(e) => setPokemonId(e.target.value)}
            placeholder="Ingrese el ID del Pokémon"
          />
          <input
            type="text"
            className="form-control mb-3"
            value={typeToCheck}
            onChange={(e) => setTypeToCheck(e.target.value)}
            placeholder="Ingrese el tipo de Pokémon a verificar (en inglés)"
          />

          <div className="d-flex justify-content-center mb-3">
            <button className="btn btn-primary mr-2" onClick={handleCheckType}>
              Buscar
            </button>
            <button className="btn btn-secondary" onClick={handleClear}>
              Limpiar
            </button>
            <Link to="/" className="btn btn-primary ml-2">
              Volver al inicio
            </Link>

          </div>


          {typeCheckResult !== null && (
          <p>
          El Pokémon con ID {saveId} {typeCheckResult ? "tiene" : "no tiene"} el tipo "{saveType}".
        </p>
        )}
        </div>
      </div>
    </div>
  );
  };