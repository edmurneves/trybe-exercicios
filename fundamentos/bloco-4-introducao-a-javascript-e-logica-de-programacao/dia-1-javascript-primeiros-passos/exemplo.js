/* Exercicio 1

const a = 10;
const b = 5;

soma = (a + b);
subtracao = (a - b);
multiplicacao = (a * b);
divisao = (a / b);
modulo = (a % b);

console.log( soma, subtracao, multiplicacao, divisao, modulo);
 */

/* Exercicio 2

const a = 3;
const b = 5;

if (a > b){
    maior = a;
}else {
    maior = b;
}
console.log(maior); */

/* Exercício 3

const a = 5
const b = 7
const c = 10

if (a > b && a > c){
    maior = a;
}else if (b > a && b > c){
    maior = b
}else {
    maior = c;
}
console.log(maior); */

/* Exercicio 4
const valor = -2;

if (valor == 0){
    ret = "zero"
}else if (valor > 0){
    ret = "Positivo"
}else {
    ret = "Negativo"
}
console.log('O valor é =', ret); */

/* Exercício 5
const a = 20;
const b = 30;
const c = 120;
let soma;

soma = a + b + c;

if (soma == 180){
    ret = true;
    console.log("É um triangulo.")
}else {
    ret = false;
    console.log("Não é um triangulo.")
} */

/* Exercicio 6
const xadrez = "REI";

peca = xadrez.toLowerCase();

if (peca == "bispo"){
    console.log("movimento em diagonal")
} else if ( peca == "cavalo"){
    console.log("Movimento em L");
} else if (peca == "rei"){
    console.log("Movimento na horizontal e vertical")
}else {
    console.log("Não é uma peça válida")
} */

/* Exercicio 7

const nota = 100;

if (nota < 0){
    console.log("Nota inválida")
} else if (nota < 50){
    console.log("Nota F")
} else if (nota < 60){
    console.log("Nota E")
} else if (nota < 70){
    console.log("Nota D")
} else if (nota < 80){
    console.log("Nota C")
} else if (nota < 90){
    console.log("Nota B")
} else if (nota <= 100){
    console.log("Nota A")
} else if (nota > 100){
    console.log("Nota inválida")
} */

/* Exercicio 8

const n1 = 11;
const n2 = 15;
const n3 = 18;

if (n1 % 2 == 0 || n2 % 2 == 0 || n3 % 2 == 0){
    console.log('true')
}else {
    console.log('false')
} */

/* Exercicio 9
const n1 = 16;
const n2 = 12;
const n3 = 18;

if (n1 % 2 == 1 || n2 % 2 == 1 || n3 % 2 == 1){
    console.log('true')
}else {
    console.log('false')
} */

/*Exercicio 10 
const custoProduto = 100;
const valorVenda = 180;

let qtdVenda = 1000;
let valorCustoTotal;
let lucro;

if ( custoProduto < 0 || valorVenda < 0) {
    console.log('Valores inválidos');
}else {    
    valorCustoTotal = custoProduto * 1.2;
    lucro = (valorVenda - valorCustoTotal) * qtdVenda;
    console.log('O lucro da venda será de: ', lucro);
} */

/* Exercicio 11
const salarioBruto = 1100;

let aliquotaINSS;
let aliquotaIR;
let salarioBase;
let salarioLiquido;

if (salarioBruto <= 1556.94){
    aliquotaINSS = salarioBruto * (8/100);
}else if (salarioBruto <= 2594.92){
    aliquotaINSS = salarioBruto * (9/100);
}else if ( salarioBruto <= 5189.82){
    aliquotaINSS = salarioBruto * (11/100);
}else {
    aliquotaINSS = 570.88;
}
salarioBase = salarioBruto - aliquotaINSS;

if (salarioBase <= 1903.98){
    aliquotaIR = 0;
}else if (salarioBase <= 2826.65){
    aliquotaIR = (salarioBase * 7.5/100) - 142.80;
}else if (salarioBase <= 3751.05){
    aliquotaIR = (salarioBase * 15/100) - 354.80;
}else if (salarioBase <= 4664.68){
    aliquotaIR = (salarioBase * 22.5/100) - 636.13;
}else {
    aliquotaIR = (salarioBase * 27.5/100) - 869.36;
}

salarioLiquido = salarioBase - aliquotaIR;
console.log(`O salário liquido será de: ${salarioLiquido}`); */