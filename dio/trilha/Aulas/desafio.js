/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/


/*const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoCombustivel = 'Gasolina';
const kmPorLitro = 10;
const distanciaEmKm = 100;


const litrosConsumidos = distanciaEmKm / kmPorLitro;

if (tipoCombustivel === 'Etanol') {
    const gastoTotal = precoEtanol * litrosConsumidos;
        console.log(gastoTotal.toFixed(2));

} else {
    const gastoTotal = precoGasolina * litrosConsumidos;
    console.log(gastoTotal.toFixed(2));
}
*/







/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/





/*
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule 
    e imprima a sua média e sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;

*/



const nota1 = 7;
const nota2 = 7;
const nota3 = 7;

const mediaAluno = (nota1 + nota2 + nota3) / 3;

    console.log(mediaAluno.toFixed(0));
if(mediaAluno < 5) {
        console.log('Reprovado')
} else if (mediaAluno >= 5 && mediaAluno <= 7) {
    console.log('Recuperacao');
} else if (mediaAluno > 7) {
    console.log('Aprovado')
}















