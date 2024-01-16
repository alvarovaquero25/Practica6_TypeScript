"use strict";
class Animal {
    constructor(nombre, edad, tipo) {
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
    }
    getnombre() {
        return this.nombre;
    }
    setnombre(value) {
        this.nombre = value;
    }
    getedad() {
        return this.edad;
    }
    setedad(value) {
        this.edad = value;
    }
    gettipo() {
        return this.tipo;
    }
    settipo(value) {
        this.tipo = value;
    }
    hacerRuido() {
        console.log(`${this.nombre} es un ${this.tipo} con ${this.edad} años y hace ruido`);
    }
}
class perro extends Animal {
    constructor(nombre, edad, tipo, raza) {
        super(nombre, edad, tipo);
        this.raza = raza;
    }
    getraza() {
        return this.raza;
    }
    setraza(value) {
        this.raza = value;
    }
    mostrarRaza() {
        console.log(`El perro es de raza ${this.raza}`);
    }
}
let perro1;
perro1 = new perro("Manolo", 12, "perro", "pastor aleman");
perro1.hacerRuido();
perro1.mostrarRaza();
class pajaro extends Animal {
    constructor(nombre, edad, tipo, pico) {
        super(nombre, edad, tipo);
        this.pico = pico;
    }
    getpico() {
        return this.pico;
    }
    setpico(value) {
        this.pico = value;
    }
    mostrarpico() {
        console.log(`El pajaron tiene un pico ${this.pico}`);
    }
}
let pajaro1;
pajaro1 = new pajaro("Juan", 150, "feo", "corto");
pajaro1.hacerRuido();
pajaro1.mostrarpico();
