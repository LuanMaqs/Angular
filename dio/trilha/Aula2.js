function  incrementoDeJuros ( valor ,  percentualDeJuros )  {
    const  valorAcrecimo  =  ( percentualDeJuros  /  100 )  *  valor ;
    return  valor  +  valorAcrecimo ;

}


console . log ( incrementoDeJuros ( 100,10 ) ) ;


function meuNome(nome) {
    nome = 'Luan'
    console.log('Meu nome e: ' + nome);
}

meuNome();


function minhaIdade(idade) {
    if (idade < 18) {
        console.log('Voce e menor de idade');

    }else (idade > 18)
    console.log('Voce e maior de idade');
}

minhaIdade(18);


function calcularMedia(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
}

console.log(calcularMedia(5, 5));