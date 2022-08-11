const randomNumber = () => Math.round(Math.random() * 101);

const upperString = (string) => string.toUpperCase();

const firstLetter = (string) => string[0];

const concatString = (first, second) => first + second;


module.exports = { randomNumber, upperString, firstLetter, concatString };