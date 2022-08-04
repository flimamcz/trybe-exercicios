const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

function filteredPokemon(name){
  const filtered = pokemons.find((pokemon) => pokemon.name === name);
  return filtered;
}

function handleError(error, message){
  if (error) {
    console.log(error.message);
  } else {
  console.log(message);
  }
}

function getPokemonDetails(namePokemon, filter, callback) {
  setTimeout(() => {
    if (filter(namePokemon) === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }
    const pokemon = filter(namePokemon);

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

getPokemonDetails('Charmander', filteredPokemon, handleError)

module.exports = {
  getPokemonDetails,
};