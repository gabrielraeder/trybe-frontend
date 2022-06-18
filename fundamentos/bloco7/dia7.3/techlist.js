function techList(tech, name) {
  tech.sort();
  let array = [];
  let obj = {};
  for (let i = 0; i < tech.length; i += 1) {
    obj['tech'] = tech[i];
    obj['name'] = name;
    array.push(obj);
    obj = {};
  }
  if (tech.length === 0) {
    return 'Vazio!';
  }
  return array;
}

module.exports = techList;