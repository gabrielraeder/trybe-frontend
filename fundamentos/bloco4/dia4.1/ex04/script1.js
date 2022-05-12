const hour = 12;
let message;

if (hour >=22) {
    message = 'Não deveríamos comer nada, é hora de dormir';
}

else if (hour >= 18 && hour < 22) {
    message = 'Rango da noite, vamos jantar :D';
}

else if (hour >= 14 && hour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
}

else if (hour >= 11 && hour < 14) {
    message = "Hora do almoço!!!";
}

else if (hour >= 4 && hour < 11) {
    message = "Hmmm, cheiro de café recém passado";
}

console.log(message)