function incrementoDeJuros(valor, percentualDeJuros) {
    const valorAcrecimo = (percentualDeJuros / 100) * valor;
    return valor + valorAcrecimo;

}


console.log(incrementoDeJuros(100, 10));

