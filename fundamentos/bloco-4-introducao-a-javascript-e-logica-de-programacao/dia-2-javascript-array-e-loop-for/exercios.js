/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; */

/* for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
} */
/* let soma = 0;
for(let i = 0; i < numbers.length; i++){    
    soma += numbers[i];
}
console.log(soma);
 */
/* let soma = 0;
for(let i = 0; i < numbers.length; i++){
    soma += numbers[i];
}
media = soma / numbers.length
console.log(media); */
/* 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
for(let i = 0; i < numbers.length; i++){
    soma += numbers[i];
}
media = soma / numbers.length;

if(media > 20){
    console.log('valor maior que 20');
}else {
    console.log('valor menor que 20');
} */


/* 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o; */
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = numbers[0];


for(i = 0; i < numbers.length; i++){    
    if(numbers[i] > maior){
        maior = numbers[i]
        }      
}
console.log(maior); */


/* 5. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; */

/* let numbers = [2, 4, 6, 16, 70, 8, 100, 2, 34, 22];
let impares = [];
let isNull = false;

for(i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 !== 0 ){
        impares.push(numbers[i]);
    }
}
if (impares.length == 0){
    console.log('Nenhum valor impar encontrado')
}else {
    console.log('Existem ',impares.length, ' numeros ímpares.');
}
 */

/* 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o; */

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];

for(let i = 1; i < numbers.length; i++){
    
    if(numbers[i] < menor){
        menor = numbers[i];
    }      
}
console.log(menor); */

/* 8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado; */

/* let array = [];

for(let i = 1; i <=25; i += 1){
    array.push(i);
}
console.log(array);


for(let u = 0; u < array.length; u += 1){
    array[u] = array[u] / 2;
}
console.log(array) */