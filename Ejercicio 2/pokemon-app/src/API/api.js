import axios from "axios";
const BASE_URL = "https://pokeapi.co/api/v2";

export async function getTotalPokemonByType(type) {
    try {
        const response = await axios.get(`${BASE_URL}/type/${type}`);
        console.log(response)
        const datas = await response.data;
        console.log(datas)

        if (datas.pokemon && datas.pokemon.length > 0) {
            return datas.pokemon.length;
        } else {
            return 0;
        }
    } catch (error) {
        console.error("Error fetching Pokémon data:", error);
    }
};

export async function getPokemonByTwoTypes(type1, type2) {
    try {
        const response1 = await axios.get(`${BASE_URL}/type/${type1}`); //trueno
        const response2 = await axios.get(`${BASE_URL}/type/${type2}`); //lucha

        const pokemonList1 = response1.data.pokemon.map((pokemon) => pokemon.pokemon); //name :charmander
        const pokemonList2 = response2.data.pokemon.map((pokemon) => pokemon.pokemon); //name: togepi

        // Filtrar los Pokémon que están presentes en ambos arrays de tipos
        const commonPokemons = pokemonList1.filter((pokemon1) =>
            pokemonList2.some((pokemon2) => pokemon1.name === pokemon2.name)
        );

        return commonPokemons;
    } catch (error) {
        console.error("Error fetching Pokémon data:", error);
    }
};

export async function getPokemonByNumber(number) {
    try {
        const response = await axios.get(`${BASE_URL}/pokemon/${number}`);
        const datas = response.data
        console.log(datas)
        return datas
    } catch (error) {
        console.log(error)
    }
};

export async function getPokemonDetailsById(pokemonId) {
    try {
      const response = await fetch(`${BASE_URL}/pokemon/${pokemonId}/`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error fetching Pokémon data");
    }
  };
  
  export async function getPokemonDetailsSorted(ids, orderBy) {
    try {
      const pokemonDetailsPromises = ids.map((id) => getPokemonDetailsById(id));
      const pokemonDetails = await Promise.all(pokemonDetailsPromises);
  
      switch (orderBy) {
        case "name":
          pokemonDetails.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "type":
          pokemonDetails.sort((a, b) => {
            const typeA = a.types[0].type.name;
            const typeB = b.types[0].type.name;
            return typeA.localeCompare(typeB);
          });
          break;
        case "weight":
          pokemonDetails.sort((a, b) => a.weight - b.weight);
          break;
        default:
          throw new Error("Invalid orderBy parameter");
      }
  
      return pokemonDetails.map((pokemon) => {
        return {
          name: pokemon.name,
          type: pokemon.types[0].type.name,
          weight: pokemon.weight,
        };
      });
    } catch (error) {
      throw new Error("Error fetching Pokémon details");
    }
  };

  export async function checkPokemonType(pokemonNumber, targetType) {
    try {
      const response = await fetch(`${BASE_URL}/pokemon/${pokemonNumber}/`);
      const data = await response.json();
  
      if (data.types && data.types.length > 0) {
        return data.types.some((typeObj) => typeObj.type.name === targetType);
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      return false;
    }
  }