import React, { useEffect, useState } from 'react';
import isEmpty from 'lodash/isEmpty';
import useLocalStorage from '../hooks/useLocalStorage';
import PokemonCard from './PokemonCard';
import { values } from 'lodash';

function PokemonCards() {
  const [pokemonList, setPokemonList] = useLocalStorage('POKEMONLIST', []);

  const getPokemon = async (indexes = [], options) => {

    let desiredAmount = options.amount;
    if (options.amount % 2 === 1) {
      desiredAmount = options.amount + 1;
    }

    let indexList = [...indexes];
    if (options.generate && isEmpty(indexList)) {
      while (indexList.length < desiredAmount) {
        const randomNumber = Math.floor(Math.random() * (options.fromId - options.toId + 1) + options.toId);
        if (indexList.includes(randomNumber)) continue;

        indexList.push(randomNumber);
      }
    }

    let toArray = [];
    let pokemonCalls = [];
    indexList.forEach((index) => {
      const url = `https://pokeapi.co/api/v2/pokemon/${index}`;
      const response = fetch(url);
      pokemonCalls.push(response);
    });
    Promise.all(pokemonCalls).then((values) => {
      return Promise.all(values.map(response => response.json()));
    }).then(values => {
      console.log(values)
      pokemonList.push([...values]);
    }
    );
  };

  useEffect(() => {
    if (isEmpty(pokemonList)) {
      getPokemon([], { generate: true, amount: 10, fromId: 1, toId: 151 })
        .then(results => {
          setPokemonList(results);
        });
    }
  }, []);

  return (
    <div className="m-6 p-4 w-full rounded-3xl">
      <h1 className="w-full text-center text-3xl font-bold text-gray-800">
        Pokémon Memory Game
      </h1>
      <div className="my-6 grid grid-cols-4 gap-4">
        {pokemonList.map((pokemon, index) => (
          <PokemonCard key={pokemon.id} pokename={pokemon.name} pokesprite={pokemon.sprites.front_default}></PokemonCard>
        ))}
      </div>
    </div>
  );
}

export default PokemonCards;
