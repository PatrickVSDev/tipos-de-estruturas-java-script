// formas de criação de variáveis no JS:
var texto = 'Hello World no arquivo script.js!!!'; // pode sofrer mutação indesejada
let cidade = 'São Paulo'; // estilo de variável mais moderno
const pais = 'Brasil'; // constante que só recebe uma vez o valor e não pode mais ser alterado

// exemplo de funções built-in

// exemplo de prompt()
// let nome = prompt('Informe o seu nome aqui:');
// console.log(nome);

// exemplo de alert()
// let mensagem = `Olá ${nome}, seja bem vindo!`;
// alert(mensagem);

// exemplo de Math.x()
// Tipos de Math.x():
// Math.max() - retorna o maior valor
// Math.min() - retorna o menor valor
// Math.random() - retorna um número aleatório entre 0 e 1
// Math.pow() - retorna a potência de um número
// Math.sqrt() - retorna a raiz quadrada de um número
// etc...

let maiorNumero = Math.max(10, 5, 7, 9, 2, 1, 3, 4, 6, 8);
console.log('maiorNumero: ', maiorNumero);

let menorNumero = Math.min(10, 5, 7, 9, 2, 1, 3, 4, 6, 8);
console.log('menorNumero: ', menorNumero);

let numeroAleatorio = Math.random();
console.log('numeroAleatorio: ', numeroAleatorio);

let numeroElevado = Math.pow(2, 4);
console.log('numeroElevado: ', numeroElevado);


// exemplo de uso de while
let contador = 10;
while (contador > 0) {
    console.log('looping while: ', contador);
    contador--;
}

// exemplo de uso de do...while
let contador2 = 100;

do {
    console.log('looping do-while: ', contador2);
    contador2 = contador2 - 10;
} while (contador2 >= 0);

// exemplo de uso com for

for (let i = 0; i <= 15; i++) {
    if(i % 2 == 0) {
        console.log('numeros pares: ', i);
    }
}

let nome = 'João';
for (let i = 0; i < 10; i++) {
    if(i == 3) {
        nome = 'Matheus';
    }

    if(i == 5 && nome == 'Matheus') {
        console.log('O nome é Matheus, pode parar!');
        break;
    }

    console.log('Interações do for: ', i);
}