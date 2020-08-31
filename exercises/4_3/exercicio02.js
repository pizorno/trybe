/*
Exercício javascript imprimir um triângulo dado um número inicial de base
criado por Eduardo Pizorno
 */

let number = 5;
let j = 0;

if ( number > 1) {
    for (let i = 0; i < number; i++) {
        j++;
        console.log('*'.repeat(j));
    }
};