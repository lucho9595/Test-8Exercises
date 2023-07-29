import React, { useState } from "react";
import { getPokemonByNumber } from "../API/api";

export default function PokemonByNumber() {
    const [pokemonNumber, setPokemonNumber] = useState("");
    const [pokemonStats, setPokemonStats] = useState(null);
    const [searchedPokemonNumber, setSearchedPokemonNumber] = useState("");
    const [namePokemon, setNamePokemon] = useState("");

    const handleSearch = async () => {
        if (!pokemonNumber || pokemonNumber <= 0) {
            alert("Ingrese un número de Pokémon desde 1");
        } else {
            try {
                const pokemonDetails = await getPokemonByNumber(pokemonNumber);
                const baseStats = extractBaseStats(pokemonDetails);
                setPokemonStats(baseStats);
                setSearchedPokemonNumber(pokemonNumber);
                setPokemonNumber("");
            } catch (error) {
                alert("El número de Pokémon no es válido. Por favor, inténtalo de nuevo.");
            }
        }
    };

    const extractBaseStats = (pokemonDetails) => {
        const baseStats = {};
        if (pokemonDetails && pokemonDetails.stats && pokemonDetails.stats.length === 6) {
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
    }

    return (
        <div>
            <input
                type="number"
                value={pokemonNumber}
                onChange={(e) => setPokemonNumber(e.target.value)}
                placeholder="Ingrese el número de Pokémon"
            />
            <button onClick={handleSearch}>Buscar</button>
            <button onClick={handleClean}>Limpiar</button>
            {pokemonStats && Object.keys(pokemonStats).length === 6 ? (
                <div>
                    <h2>Stats base del Pokémon {namePokemon} con el número {searchedPokemonNumber}:</h2>
                    <ul>
                        {Object.keys(pokemonStats).map((statName) => (
                            <li key={statName}>
                                {statName}: {pokemonStats[statName]}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}
        </div>
    );
}