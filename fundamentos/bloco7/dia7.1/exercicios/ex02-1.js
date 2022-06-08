const fatorial = (n) =>  n < 2 ?  1 : n * fatorial(n - 1);;

console.log(fatorial(5));