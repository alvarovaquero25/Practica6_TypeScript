"use strict";
class empleado {
    constructor(nombre, apellido, edad, fechainicio, profesion, fechafinalizacion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.fechainicio = fechainicio;
        this.fechafinalizacion = fechafinalizacion;
        this.profesion = profesion;
    }
    getnombre() {
        return this.nombre;
    }
    setnombre(value) {
        this.nombre = value;
    }
    getapellido() {
        return this.apellido;
    }
    setapellido(value) {
        this.apellido = value;
    }
    getedad() {
        return this.edad;
    }
    setedad(value) {
        this.edad = value;
    }
    getfechainicio() {
        return this.fechainicio;
    }
    setfechainicio(value) {
        this.fechainicio = value;
    }
    getfechafinalizacion() {
        return this.fechafinalizacion;
    }
    setfechafinalizacion(value) {
        this.fechafinalizacion = value;
    }
    getprofesion() {
        return this.profesion;
    }
    setprofesion(value) {
        this.profesion = value;
    }
    imprimir() {
        console.log(`Nombre ${this.nombre} y edad: ${this.edad}`);
    }
}
let date = new Date("2018/01/30 23:30:14");
let datefinal = new Date("2024/01/30 23:30:14");
let empleado1;
empleado1 = new empleado("Alvaro", "Vaquero", 21, date, "Profesor");
let empleado2;
empleado2 = new empleado("Alvaro", "Vaquero", 21, date, "Bombero", datefinal);
