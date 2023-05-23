//Tipos primitivos de variaveis
let ligado:boolean = false;
let nome:string = "Luan";
let idade:number = 17;
let altura:number = 1.8;


//tipos especiais 
let nulo: null = null;
let indefinido: undefined = undefined;


//tipos abrangentes: any e void
// let retorno:void 
// let retornoView:any = 0

//Objeto - sem previsibilidade
let produto:object = {
    name: "Luan",
    cidade: "Santos",
    idade: 17,
}

type produtoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

let meuProduto:produtoLoja = {
    nome: "Tênis",
    preco: 100,
    unidades: 10,
}


//arrays 
let dados: string[] = ["Luan", "Marcela"]
let dados2:Array<string> = ["Luan", "Marcela"]

let infos: (string | number )[] = ["Luan", "Marcela", 1,2,3,5,6]

//tuplas 

let boleto:[string, number, number] = ["Conta de agua", 199.90, 38102310293];


//arrays metodos 
dados.pop()


//datas
let aniversario:Date = new Date("2023-04-16 5:00")
console.log(aniversario.toString());

//function 
function addNumber(x: number, y:number): number {
    return x + y;
}

let soma: number = addNumber(7, 5)

console.log(soma);


function addToName(name: string){
    return `Hello ${name}`;
}

console.log(addToName("Luan"));

//function multii Tipos
function callToPhone(phone: string | number): number | string {
    return phone
}
let phone:number = 63982800421
console.log(callToPhone(`Luan ${phone}`))

//function Async
async function getDataBase(id: number): Promise<string> {
    return "Luan"
}

//interfaces (type x interface)

type robot = {
    id: number | string
    name: string
    sayHello():string;
}

const bot: robot = {
    id: "1",
    name: "superman",
    sayHello: function (): string {
        return "teste"
    }
}

//Interface is a contract. Whoever inherits it has to follow it 

interface robot2{
    readonly id: number | string;
    name: string
}

const bot2:robot2 = {
    id: "2",
    name: "Mulher Maravilha"
}

console.log(bot)
console.log(bot2)


class Pessoa implements robot {
    id: string | number;
    name: string;

    constructor(id: string | number , name: string) {
        this.id = id
        this.name = name
    }
    sayHello(): string {
        return `Hello ${this.name}`;
    }
    
}

const p = new Pessoa(1, "megaman")

console.log(p.sayHello());


//class
//data modifiers 

class Character {
    protected name:string;
    readonly stregth: number;
    skill: number;

    constructor(name:string , stregth:number, skill:number) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill

        
    }

    attack() : void{
        console.log(`Attack with ${this.stregth} points`)
    }
}

const p1 = new Character("Luan", 10, 98);

p1.attack()

class Magician extends Character {
    magicPoints: number
    constructor(name:string , stregth:number, skill:number, magicPoints:number){
        super(name, stregth, skill)
        this.magicPoints = magicPoints;
        

    }
}

const p2 = new Magician("Mago", 09, 70, 100);
p2.attack();


//generics
function concatArray<T>(...itens: T[] ): T[]{
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1,5], [4]);
const stgArray = concatArray<string[]>(["Luan", "Goku"], ["Marcela"])

console.log(numArray);
console.log(stgArray)


function apiVersion(version: string) {
    return (target: any) => {
      Object.assign(target.prototype, { __version: version, __name: "Luan" });
    };
  }
  
  //attribute decorator
  function minLength(length: number) {
    return (target: any, key: string) => {
      let _value = target[key];
  
      const getter = () => "[play]" + _value;
      const setter = (value: string) => {
        if (value.length < length) {
          throw new Error(`Tamanho menor do que ${length}`);
        } else {
          _value = value;
        }
      };
  
      Object.defineProperty(target, key, {
        get: getter,
        set: setter,
      });
    };
  }
  
  class Api {
    @minLength(10)
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  }
  
  const api = new Api("usaadasdaaaaa");
  console.log(api.name);
