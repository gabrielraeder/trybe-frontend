function encode(text) {
  let code = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  let novo = [];
  for (let value of text) {
    novo.push(value);
  }
  for (let ind = 0; ind < novo.length; ind += 1) {
    for (let key in code) {
      if (novo[ind] === key) {
        let valor = code[key];
        novo[ind] = valor;
      }
    }
  }
  let fim = novo.join('');
  return fim;
}

function decode(text) {
  let code = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  let novo = [];
  for (let value of text) {
    novo.push(value);
  }
  for (let ind = 0; ind < novo.length; ind += 1) {
    for (let key in code) {
      if (novo[ind] === key) {
        let valor = code[key];
        novo[ind] = valor;
      }
    }
  }
  let fim = novo.join('');
  return fim;
}

module.exports = {encode, decode};