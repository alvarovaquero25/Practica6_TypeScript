class Almacen <T>{
    private contenedor : T[] = [];

    
    agregarElementos(elemento : T){
        this.contenedor.push(elemento)
        console.log('El elemento ha sido añadido')
    }
    listarElementos(){
        this.contenedor.forEach(element => {
            console.log(element)
        });
    }
    obtenerElemento(elemento: number): T {
        return this.contenedor[elemento]
    }
}
let elemento1 : Almacen<string>;
elemento1 = new Almacen <string>();
elemento1.agregarElementos("Cocacola");
elemento1.listarElementos();
elemento1.obtenerElemento(0);

let elemento2 : Almacen<number>;
elemento2 = new Almacen <number>();
elemento2.agregarElementos(5);
elemento2.listarElementos();
elemento2.obtenerElemento(0);
