import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';

function PokemonCards() {
  const [pokemonList, setPokemonList] = useState([]);

  const pokemones = [
    {name: "TuViejamon0", sprite: "NoCocaPorFavor0"},
    {name: "TuViejamon1", sprite: "NoCocaPorFavor1"},
    {name: "TuViejamon2", sprite: "NoCocaPorFavor2"},
    {name: "TuViejamon3", sprite: "NoCocaPorFavor3"},
  ]

  const getPokemon = async () => {
    let toArray = [];
    try {
      const url = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20';
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.results);
      data.results.forEach((pokemon) => {
        toArray.push(pokemon);
        setPokemonList(toArray);
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    // getPokemon();
    // console.log(pokemonList);
  }, []);

  return (
    <div className="m-6 p-4 w-full outline outline-4 outline-blue-700 rounded-3xl">
      <h1 className="w-full text-center text-3xl font-bold text-white">
        Pokémon Memory Game
      </h1>
      <div className="flex flex-wrap gap-4 justify-center">
        <PokemonCard
          pokename={pokemones[0].name}
          pokesprite={pokemones[0].sprite.default_front}
        ></PokemonCard>
        <PokemonCard
          pokename={pokemones[1].name}
          pokesprite={pokemones[1].sprite.default_front}
        ></PokemonCard>
        <PokemonCard
          pokename={pokemones[2].name}
          pokesprite={pokemones[2].sprite.default_front}
        ></PokemonCard>
        <PokemonCard
          pokename={pokemones[3].name}
          pokesprite={pokemones[3].sprite.default_front}
        ></PokemonCard>
      </div>
    </div>
  );
}

export default PokemonCards;
