
class Pessoa {
    nome;
    idade;
    anoDeNascimento;


    constructor(nome, idade)  {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    
    }
   
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const Luan1 = new Pessoa('Luan', 17);
const Gabriel2 = new Pessoa('Gabriel', 19);

console.log (Luan);



        



const Luan = new Pessoa();
Luan.nome = 'Luan Marques';
Luan.idade = 17;


const Gabriel = new Pessoa();
Gabriel.nome = 'Gabriel Rogerio';
Gabriel.idade = 19;

//console.log(Luan);
//console.log(Gabriel);

Luan.descrever();
Gabriel.descrever();





class carro {

    marca;
    cor;
    gastosPorKm;


    constructor (marca, cor, gastosPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastosPorKm = gastosPorKm;

    }

    calcularGasto(distancia,precoCombustivel){
        return distancia * this.gastosPorKm * precoCombustivel;
    }
 }

 const i8 = new carro('BMW', 'azul', 1/5);
 console.log(i8.calcularGasto(70,4));






 class pessoa {
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        return this.peso / (this.altura * this.altura);
    }

    classificarIMC() {
        const imc = this.calcularIMC();
        if (imc < 18.5) {
            return ('Abaixo')
        } else if (imc >= 18.5 && imc <= 25) {
            return ('normal')
        } else if (imc >= 25 && imc <= 30) {
            return ('Acima do peso');
        } else if (imc >= 30 && imc <= 40) {
            return ('Obeso');
        } else if (imc > 40) {
            return ('Obesidade Grave');
        }
    }
 }

 const Luan = new pessoa ('Luan', '60', '1.78');
 console.log(Luan.classificarIMC());
 


    



