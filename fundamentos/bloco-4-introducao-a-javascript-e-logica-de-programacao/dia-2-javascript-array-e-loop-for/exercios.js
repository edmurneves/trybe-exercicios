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

/* Bônus
Para os próximos dois exercícios leia este artigo e tente entender o que está acontencedo no código abaixo:
Copiar
for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
    }
  }
}
Ordene o array numbers em ordem crescente e imprima seus valores;

let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }

  console.log(array);



Ordene o array numbers em ordem decrescente e imprima seus valores;

let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] > array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }

  console.log(array);


Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:
Copiar

[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54] */

