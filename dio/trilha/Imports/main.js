const {gets, print} = require  ('./funções-auxiliares.js');

const quantidadeAlnuos = gets();
let valorEncontrado = 0;


for (let i = 0; i < quantidadeAlnuos.length; i++) {
    const numeroSorteado = quantidadeAlnuos[i]; 
        if (numeroSorteado > valorEncontrado) {
            valorEncontrado = numeroSorteado;
        }
    
    
}

print(valorEncontrado);