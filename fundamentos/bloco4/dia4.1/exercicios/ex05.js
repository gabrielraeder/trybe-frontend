const a = 50;
const b = 50;
const c = -1;

if (a + b + c == 180 && a >= 1 && b >= 1 && c >= 1) {
    console.log(true);
}
else if (a + b + c != 180 && a >= 1 && b >= 1 && c >= 1) {
    console.log(false)
}
else if (a <= -1 || b <= -1 || c <= -1) {
    console.log('Inválido');
}