function hydrate(str) {
  let reg = /\d+/g;
  let num = str.match(reg);
  let result = 0
  for (let value of num) {
    result += Number(value);
  }
  if (result > 1) {
    return result + ' copos de água';
  }
  return result + ' copo de água';
}

module.exports = hydrate;