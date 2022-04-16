import { useState, useEffect } from 'react';
import './App.css';
import PokemonCards from './components/PokemonCards';

function App() {
  // const [pokemonList, setPokemonList] = useState([]);
  // 
  // const getPokemon = async () => {
  //   let toArray = [];
  //   try {
  //     const url = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20`;
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     console.log(data.results);
  //     data.results.forEach((pokemon) => {
  //       toArray.push(pokemon);
  //       setPokemonList(toArray);
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   // getPokemon();
  // }, []);

  return (
    <div id="main-view" className="flex justify-center bg-black">
      <PokemonCards></PokemonCards>
    </div>
  )
}

export default App
