
const notas = [];


notas.push(7);
notas.push(7);
notas.push(8);
notas.push(6);
notas.push(5);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota
    
}
const media = soma / notas.length
console.log(media)


/*

1) Crie um programa que dado um número imprima a sua tabuada.

2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]

6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]*/


const numero = 7
 for (let i = 1; i <= 10; i++) {
     console.log(i * numero)
}



const numeros = [1, 2, 3, 4, 5, 6, 7, 8];



for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 2 === 0) {
        console.log(numero);
    }
    

}


const numerosPares = [];

    for (let i = 0; i < 10; i = i + 2) {
        numerosPares.push(i);
    }

    console.log(numerosPares);