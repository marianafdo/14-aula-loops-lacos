// LOOPS E LAÇOS

/* let condicao = true;
while (condicao) {
    // enquanto a condição for verdadeira
    // as linhas de código dentro deste bloco serão executadas
    // assim que a condição ficar falsa o LOOP/laço vai parar
} 

let i = 0;
while (i < 10) {
    console.log(i)

    i++
}


let estomago = 0;
while (estomago < 100) {
    console.log("Quero comer mais coxinhas");
    estomago = estomago + 10;
}



let soma = 0;
let numero = Number(prompt("Digite um número"));

while (numero !== 0) {
    soma += numero;
    numero = Number(prompt("Digite um número"));
}
console.log("A soma dos números inseridos é:" + soma);



const numeros = [14, 67, 89, 15, 23];
for (let i = 0; i < 5 ; i++){
    const elemento = numeros [i];
    console.log(elemento);
}



function qualMaior(arr) {
    let maior = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > maior) {
            maior = arr[i]
        }
    }
return "O maior número é " + maior;
    
}
const lista = [10, 20, 57, 54, 28, 30, 40];
console.log(qualMaior(lista));

*/

const numeros = [14, 67, 89, 15,23]
for (let numero of numeros){
    console.log(numero);
}


let meuArray = [1,2,3,4,5,6,7,8,9,10];

for (const elemento of meuArray){
    console.log(elemento)
}
meuArray.forEach(elemento => {
    console.log(elemento)
    
})


let palavras = ['Ola', 'amigo', 'como', 'você', 'está?'];

function criarFrase(array) {
    let frase = " ";
   for (const elemento of array) {
    frase = frase + " "+ elemento;
   }
   return frase;
}
console.log(criarFrase(palavras));
