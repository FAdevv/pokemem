function PokemonCard({ pokename, pokesprite }) {
  return (
    <div className="p-2 border-2 border-teal-600 text-center">
      <h1 className="text-3xl font-bold text-gray-800 uppercase">{pokename}</h1>
      <a className="p-1 hover:bg-teal-600 hover:text-white hover:rounded-md uppercase text-teal-600" href={pokesprite}>Visit that mofo</a>
    </div>
  );
}

export default PokemonCard;
