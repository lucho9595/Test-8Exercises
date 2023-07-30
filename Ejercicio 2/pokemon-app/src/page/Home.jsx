import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Funcionalidades de la aplicación</h1>
      <div className="row justify-content-center">
        <div className="col-md-6 mb-4">
          <h3>Buscador total de tipos:</h3>
          <Link to="/PokemonByType" className="btn btn-primary">
            Ver
          </Link>
        </div>
        <div className="col-md-6 mb-4">
          <h3>Buscador de pokemons con tipos iguales:</h3>
          <Link to="/PokemonByTwoTypes" className="btn btn-primary">
            Ver
          </Link>
        </div>
        <div className="col-md-6 mb-4">
          <h3>Buscar los primeros 6 Stats:</h3>
          <Link to="/PokemonByNumber" className="btn btn-primary">
            Ver
          </Link>
        </div>
        <div className="col-md-6 mb-4">
          <h3>Detalle pokemon:</h3>
          <Link to="/PokemonSorting" className="btn btn-primary">
            Ver
          </Link>
        </div>
        <div className="col-md-6 mb-4">
          <h3>Verificar si el pokemon tiene ese tipo:</h3>
          <Link to="/PokemonTypeCheck" className="btn btn-primary">
            Ver
          </Link>
        </div>
      </div>
    </div>
  );
};