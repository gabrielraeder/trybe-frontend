const asyncSum = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500);
};

// const resultado = (param) => console.log(param);

module.exports = { asyncSum }