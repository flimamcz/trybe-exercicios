// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails, filteredPokemon, handleError } = require('../exercise8');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', (done) => {
    const func = getPokemonDetails('Charmander', filteredPokemon, handleError)
    const result = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember'
    expect(func).toBe(result);
    done()
  });

  // it('retorna um pokémon que existe no banco de dados', () => {
  //   // Escreva aqui seu código
  // });
});