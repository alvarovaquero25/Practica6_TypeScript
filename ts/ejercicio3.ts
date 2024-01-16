class empleado{
    private nombre : string;
    private apellido : string;
    private edad : number;
    private fechainicio : Date;
    private profesion : string;
    private fechafinalizacion : Date | undefined;

    constructor(nombre :string,apellido : string,edad : number,fechainicio : Date, profesion : string, fechafinalizacion? : Date){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.fechainicio = fechainicio;
        this.fechafinalizacion = fechafinalizacion;
        this.profesion = profesion;
    }
    public getnombre(): string {
        return this.nombre;
    }

    public setnombre(value: string) {
        this.nombre = value;
    }

    public getapellido(): string {
        return this.apellido;
    }

    public setapellido(value: string) {
        this.apellido = value;
    }

    public getedad(): number {
        return this.edad;
    }

    public setedad(value: number) {
        this.edad = value;
    }

    public getfechainicio(): Date {
        return this.fechainicio;
    }

    public setfechainicio(value: Date) {
        this.fechainicio = value;
    }

    public getfechafinalizacion(): Date | undefined {
        return this.fechafinalizacion;
    }

    public setfechafinalizacion(value: Date | undefined) {
        this.fechafinalizacion = value;
    }

    public getprofesion(): string {
        return this.profesion;
    }

    public setprofesion(value: string) {
        this.profesion = value;
    }
    imprimir() {
        console.log(`Nombre ${this.nombre} y edad: ${this.edad}`)
    }
}
let date = new Date("2018/01/30 23:30:14")
let datefinal = new Date("2024/01/30 23:30:14")
let empleado1 : empleado;
empleado1 = new empleado("Alvaro","Vaquero",21,date,"Profesor");
let empleado2 : empleado;
empleado2 = new empleado("Alvaro","Vaquero",21,date,"Bombero",datefinal);