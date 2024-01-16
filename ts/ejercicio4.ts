class Animal {
    private nombre : string;
    private edad : number;
    private tipo : string;
    
    constructor(nombre :string,edad : number,tipo : string ){
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
    }
    public getnombre(): string {
        return this.nombre;
    }

    public setnombre(value: string) {
        this.nombre = value;
    }
    public getedad(): number {
        return this.edad;
    }

    public setedad(value: number) {
        this.edad = value;
    }
    public gettipo(): string {
        return this.tipo;
    }

    public settipo(value: string) {
        this.tipo = value;
    }
    hacerRuido(){
        console.log(`${this.nombre} es un ${this.tipo} con ${this.edad} años y hace ruido`)
    }
}
class perro extends Animal{
    private raza : string;

    constructor (nombre :string,edad : number,tipo : string  ,raza :string){
        super(nombre, edad, tipo)
        this.raza =raza;
    }

    public getraza(): string {
        return this.raza;
    }

    public setraza(value: string) {
        this.raza = value;
    }
    mostrarRaza(){
        console.log(`El perro es de raza ${this.raza}`)
    }
}
let perro1 : perro;
perro1 = new perro("Manolo",12,"perro","pastor aleman");
perro1.hacerRuido();
perro1.mostrarRaza()

class pajaro extends Animal{
    private pico : string;

    constructor(nombre :string,edad : number,tipo : string  ,pico :string){
        super(nombre, edad, tipo)
        this.pico = pico;
    }
    public getpico(): string {
        return this.pico;
    }

    public setpico(value: string) {
        this.pico = value;
    }
    mostrarpico(){
        console.log(`El pajaron tiene un pico ${this.pico}`)
    }
}
let pajaro1 : pajaro;
pajaro1 = new pajaro("Juan",150,"feo","corto")
pajaro1.hacerRuido();
pajaro1.mostrarpico();