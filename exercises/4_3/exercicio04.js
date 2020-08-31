/*
Exercício javascript desenhar uma pirâmide
criado por Eduardo Pizorno
 */

let number = 7;
let k = (number - 1) / 2;

if ( (number > 1) && (number % 2 != 0)) {
    for (let i = 1; i <= number; i = i + 2) {
        if (k != -1) {
            console.log(' '.repeat(k--) + "*".repeat(i));
        }
    }
};