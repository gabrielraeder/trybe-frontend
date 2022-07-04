// 9 - A fim de evitar que futuros treinadores sejam prejudicados,
// o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. 
// Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo.
// Complete os testes para a função getPokemonDetails de acordo com as especificações.

const { getPokemonDetails } = require('./ex08')

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');

    function callback(error, result) {
      expect(error).toEqual(expectedError);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expected = 'Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun'

    function callback (error, result) {
      expect(result).toBe(expected);
      done()
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Squirtle', callback)
  });
});
