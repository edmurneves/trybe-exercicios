/* 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
Copiar
n = 5

*****
*****
*****
*****
*****

let n = 10;
let s = ''

for(let index2 = 0; index2 < n; index2 +=1){
    s += '*';
}
for(let index = 0; index < n; index += 1){
    console.log(s)
}
 */

/* Gabarito
let n = 10;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
}; */

/* 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
Copiar
n = 5

*
**
***
****
***** 

*/

/* let n = 5;
let symbol = '*';
let inputline = '';

for(let index = 0; index < 5; index += 1){
  inputline += symbol;
  console.log(inputline);    
}

 */
/* 3- Agora inverta o lado do triângulo. Por exemplo:
Copiar
n = 5

    *
   **
  ***
 ****
***** */


/* let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for(lineIndex = 0; lineIndex < n; lineIndex += 1){
  for(let columnIndex = 1; columnIndex <= n; columnIndex += 1){
    if(columnIndex < inputPosition){
      inputLine = inputLine + ' ';    
    }else{
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
    
} */