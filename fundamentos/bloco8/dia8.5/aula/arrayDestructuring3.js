let numerosPares = [1, 3, 5, 6, 8, 10, 12];

 // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[,,, ...numerosPares] = numerosPares

console.log(numerosPares);