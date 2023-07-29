import React from "react";
import TotalPokemonByType from "../components/PokemonByType";
import PokemonByTwoTypes from "../components/PokemonByTwoTypes";
import PokemonByNumber from "../components/PokemonByNumber";
import PokemonSorting from "../components/PokemonSorting";
import PokemonTypeCheck from "../components/PokemonTypeCheck";

function Home() {
  return (
    <div>
      <h1>Funcionalidades de la aplicación</h1>
      <h3>
        Buscador total de tipos:
      </h3>
      <TotalPokemonByType />
      <h3>
        Buscador de pokemons con tipos iguales:
      </h3>
      <PokemonByTwoTypes />
      <h3>
        Buscar los primeros 6 Stats:
      </h3>
      <PokemonByNumber />
      <h3>
        Detalle pokemon:
      </h3>
      <PokemonSorting />
      <h3>
        Verificar si el pokemon tiene ese tipo:
      </h3>
      <PokemonTypeCheck />
    </div>
  );
}

export default Home;
