import React, { useState } from 'react';
import axios from 'axios';

const PokemonSearch = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  const handleSearch = () => {
    const formattedName = pokemonName.trim().toLowerCase();

    if (formattedName === '') {
      alert('Por favor, ingresa el nombre o número de un Pokémon.');
      return;
    }

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${formattedName}`)
      .then((response) => {
        setPokemonData({
          name: response.data.name,
          number: response.data.id,
          type: response.data.types[0].type.name,
          weight: response.data.weight,
          height: response.data.height,
          image: response.data.sprites.front_default,
        });
      })
      .catch((error) => {
        alert('No se encontró ningún Pokémon con ese nombre o número.');
        console.error(error);
        setPokemonData(null);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre o número del Pokémon"
              value={pokemonName}
              onChange={(e) => setPokemonName(e.target.value)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleSearch}
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>

      {pokemonData && (
        <div className="row justify-content-center mt-3">
          <div className="col-md-6 text-center">
            <h2>{pokemonData.name}</h2>
            <p>Número: {pokemonData.number}</p>
            <p>Tipo: {pokemonData.type}</p>
            <p>Peso: {pokemonData.weight} kg</p>
            <p>Altura: {pokemonData.height} dm</p>
            <img
              src={pokemonData.image}
              alt={pokemonData.name}
              className="img-fluid"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonSearch;