/* Usando o objeto abaixo, faça os exercícios a seguir:
Copiar */

/* let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
}; */

/* 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console: */

/* console.log('Bem vinda, ' + info.personagem); */

/* 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console: */


/* info['recorrente'] = 'Sim'; */

/* 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console: */

/* for(key in info){
    console.log(key)
}  */

4/*  - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console: */

/* for(key in info){
    console.log(info[key])
} */

/* 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console: */

/* let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}

for(key in info){
    if (key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Sim'){
        console.log('Ambos recorrentes')
    }else{
    console.log(info[key] + ' e ' + info2[key])
    }
} */

/* Usando o objeto abaixo, faça os exercícios a seguir:
 6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'". */
/* 
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);


leitor.livrosFavoritos.push({ titulo: 'Harry Potter e o Prisioneiro de Azkaban', autor: 'JK Rowling', editor: 'Rocco',});

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[1].titulo);

console.log(leitor.nome + ' tem ' +  + leitor.livrosFavoritos.length + ' livros favoritos'); */

/* Parte II - Funções
Agora vamos fazer um exercício que vai deixar nítido como funções com responsabilidades bem definidas deixam o código mais bem escrito.
A manipulação de arrays pode ser complexa em alguns momentos e por isso o JavaScript conta com diversos métodos para a sua manipulação. A documentação é sempre a nossa maior aliada, se você tiver curiosidade de ler mais sobre esses métodos, clique aqui para acessar a documentação completa. Não se preocupe em entender todos os métodos, eles serão trabalhados cada vez com mais frequência durante o curso e sempre que um método novo for necessário ele será ensinado a você.
Spoiler-alert : para os exercícios do dia, os métodos split , join e reverse podem ser muito úteis. */

/* 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for. */

/* function verificaPalindromo(palavra) {
    let palindromo = palavra.split('');   
    console.log(palindromo);
    let reverso = palindromo.reverse();
    console.log(reverso);
    let palavraInvertida = reverso.join('');
    console.log(palavraInvertida);
    if (palavra == palavraInvertida){
        console.log(true);
    }else {
        console.log(false);
    }

}

verificaPalindromo('regiane'); */

/* function verificaPalindrome(word){
    for(index in word){
      if(word[index] != word[(word.length - 1) - index]){
        console.log(true);
      }
    }
    console.log(true);
  } */
/* 
  function verificaPalindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
      console.log(true);
    } else {
        console.log(false);
    }
  }

  verificaPalindrome('arara'); */


  /* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 . */

/* function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
      if (numeros[indiceMaior] < numeros[indice]) {
        indiceMaior = indice;
      }
    }
    return indiceMaior;
  }
  
  console.log(indiceDoMaior([2, 3, 6, 13, 10, 1])); //4 */

  /* 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
  Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
  Valor esperado no retorno da função: 6 . */

  /* function indiceDoMenor(numeros) {
    let indiceMenor = 0;
    for (let indice in numeros) {
      if (numeros[indiceMenor] > numeros[indice]) {
        indiceMenor = indice;
      }
    }
    return indiceMenor;
  }
  
  console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3])); */

/* function maiorCaractere (caracteres){  
    let indiceMaior = 0;  
    for (let index in caracteres){
       if (caracteres[index].length > caracteres[indiceMaior].length ){
           indiceMaior = index;
       }
          
    }
    console.log(caracteres[indiceMaior])}


arrCaratere = ['José', 'LucasBiase', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
maiorCaractere(arrCaratere);

Resposta do Cource:

function maiorPalavra(palavras) {
    let maiorPalavra = palavras[0];
    for (let indice in palavras) {
      if (maiorPalavra.length < palavras[indice].length) {
        maiorPalavra = palavras[indice];
      }
    }
    return maiorPalavra;
  }
  
  console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); //Fernanda */

  