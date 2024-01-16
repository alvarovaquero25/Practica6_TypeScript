interface DispositivoElectronico{
    nombre : string;
    encendido : boolean;

    encender : () => void;
    apagar : () => void;
}
class laptop implements DispositivoElectronico{
    private modelo: string;

    constructor(modelo :string, public nombre :string, public encendido: boolean){
        this.modelo = modelo
    }
    public getmodelo(): string {
        return this.modelo;
    }

    public setmodelo(value: string) {
        this.modelo = value;
    }
    encender(){
        if(this.encendido == true){
            console.log(`El dispositivo ${this.nombre} se esta encendiendo`)
        }else{
            console.log(`El dispositivo ${this.nombre} continua apagado`)
        }
    }
    apagar(){
        if(this.encendido==false){
            console.log(`El dispositivo ${this.nombre} se esta apagando`)
        }else{
            console.log(`El dispositivo ${this.nombre} esta encendido`)
        }
    }
    abrirPrograma(){
        if(this.encendido == true){
            console.log(`El dispositivo ${this.nombre} puede abrir el programa`)
        }else{
            console.log(`El dispositivo ${this.nombre} no puede abrir el programa`)
        }
    }
}
let laptop1 : laptop;
laptop1 = new laptop("HP","Portatil",true)
laptop1.encender();
laptop1.apagar();
laptop1.abrirPrograma();

class smartphone implements DispositivoElectronico {
    private marca : string;

    constructor(marca :string, public nombre :string, public encendido: boolean){
        this.marca = marca
    }

    public getmarca(): string {
        return this.marca;
    }
    public setmarca(value: string) {
        this.marca = value;
    }

    encender(){
        if(this.encendido == true){
            console.log(`El dispositivo ${this.marca} se esta encendiendo`)
        }else{
            console.log(`El dispositivo ${this.marca} continua apagado`)
        }
    }
    apagar(){
        if(this.encendido==false){
            console.log(`El dispositivo ${this.marca} se esta apagando`)
        }else{
            console.log(`El dispositivo ${this.marca} esta encendido`)
        }
    }
    llamar(){
        if(this.encendido == true){
            console.log(`El dispositivo ${this.marca} puede llamar`)
        }else{
            console.log(`El dispositivo ${this.marca} no puede llamar`)
        }
    }
}
let movil1 : smartphone;
movil1 = new smartphone("Samsung", "Galaxy A23",false);
movil1.apagar();
movil1.encender();
movil1.llamar();