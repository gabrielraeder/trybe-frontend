// 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase, 
// que transforma as letras de uma palavra em letras maiúsculas. 
// Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

// const consoleIt = (str) => console.log(str);

// uppercase('olá mundo!', consoleIt);

test('Testa se uppercase deixa o texto em MAIUSCULAS', (done) => {
  uppercase('olá, mundo!', (result) => {
    try {
      expect(result).toBe('OLÁ, MUNDO!')
      done()
    } catch(error) {
      done(error)
    }
  })
})