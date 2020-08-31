/*
Exercício javascript similar ao anterior porém invertendo lado do triângulo
criado por Eduardo
 */

let k = number = 5;
let j = 0;


if ( number > 1) {
    for (let i = 0; i < number; i++) {
        j++;
        console.log(' '.repeat(--k) + '*'.repeat(j));
    }
};