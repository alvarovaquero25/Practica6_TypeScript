"use strict";
class Almacen {
    constructor() {
        this.contenedor = [];
    }
    agregarElementos(elemento) {
        this.contenedor.push(elemento);
        console.log('El elemento ha sido añadido');
    }
    listarElementos() {
        this.contenedor.forEach(element => {
            console.log(element);
        });
    }
}
let elemento1;
elemento1 = new Almacen();
elemento1.agregarElementos("Cocacola");
elemento1.listarElementos();
