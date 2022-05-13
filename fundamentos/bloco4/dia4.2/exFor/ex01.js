let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia', 'Limão', 'Abacate', 'Repolho'];
groceryList.sort()

for (let index = 0; index < groceryList.length; index+=1) {
    console.log((index+1) + ' - ' + groceryList[index]);  
}