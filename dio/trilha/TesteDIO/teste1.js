const nomeRestaurante = 'mcDonals';
const tempoEstimadoEntrega = parseInt(10);


function calcular_tempo_entrega(nomeRestaurante, tempoEstimadoEntrega){
    mensagem = (`O restaurante ${nomeRestaurante} entrega em ${tempoEstimadoEntrega} minutos.`);
    return mensagem
}
   
console.log(calcular_tempo_entrega('mcDonalds', 10))







