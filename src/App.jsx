import { useEffect, useState } from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';

function App() {
  const [pokemon, setPokemon] = useState('pikachu');
  const [pokemonSprite, setPokemonSprite] = useState('');

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }

    useEffect(() => {
      getPokemon();
    }, []);

    return (
      <div id="main-view" className="">
        <PokemonCard className="" />
      </div>
    )
  }
}

export default App
