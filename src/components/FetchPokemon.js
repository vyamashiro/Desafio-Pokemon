function FetchPokemon() {
  
  const urlPokemon = id => `https://pokeapi.co/api/v2/pokemon/${id}`

  const arrayPokemon = []
  
  for(let id = 1; id <= 151; id++) {
    const objectPokemon = fetch(urlPokemon(id)).then(response => response.json())
    arrayPokemon.push(objectPokemon);
  };
  
  return arrayPokemon
  
}

export default FetchPokemon;