const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

// greeting('josé'); // // Welcome usuário!


const multiply = (number, value = 2) => number * value

console.log(multiply(8));