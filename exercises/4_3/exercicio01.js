/*
Exercício para criar na tela um quadro de asteriscos dado um número > 1
criado por Eduardo Pizorno
 */

let number = 5;

if ( number > 1) {
    for (let i = 0; i < number; i++) {
        /* base */
        console.log('*'.repeat(number));
    }
};