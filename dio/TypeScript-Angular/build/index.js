"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let ligado = false;
let nome = "Luan";
let idade = 17;
let altura = 1.8;
let nulo = null;
let indefinido = undefined;
let produto = {
    name: "Luan",
    cidade: "Santos",
    idade: 17,
};
let meuProduto = {
    nome: "Tênis",
    preco: 100,
    unidades: 10,
};
let dados = ["Luan", "Marcela"];
let dados2 = ["Luan", "Marcela"];
let infos = ["Luan", "Marcela", 1, 2, 3, 5, 6];
let boleto = ["Conta de agua", 199.90, 38102310293];
dados.pop();
let aniversario = new Date("2023-04-16 5:00");
console.log(aniversario.toString());
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(7, 5);
console.log(soma);
function addToName(name) {
    return `Hello ${name}`;
}
console.log(addToName("Luan"));
function callToPhone(phone) {
    return phone;
}
let phone = 63982800421;
console.log(callToPhone(`Luan ${phone}`));
function getDataBase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Luan";
    });
}
const bot = {
    id: "1",
    name: "superman",
    sayHello: function () {
        return "teste";
    }
};
const bot2 = {
    id: "2",
    name: "Mulher Maravilha"
};
console.log(bot);
console.log(bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello ${this.name}`;
    }
}
const p = new Pessoa(1, "megaman");
console.log(p.sayHello());
class Character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
const p1 = new Character("Luan", 10, 98);
p1.attack();
