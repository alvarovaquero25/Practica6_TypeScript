type cadena = [string];
let texto :string;
texto = "Hola buenos dias"
function contarpalabras(){
    let contar = texto.split(' ').length;
    console.log("La cadena tiene "+contar+" palabras")
}
contarpalabras();

function getAvenger(nombre:string, arma: string, poder?:string){
    if (poder) {
        return "El nombre es "+nombre+" su arma es "+arma+" con el poder "+poder;
    }else{
        return "Su nombre es "+nombre;
    }
}
const armapordefecto = "arco";
console.log(getAvenger("Alvaro",armapordefecto,"Telequinesis"));
console.log(getAvenger("Alvaro",armapordefecto));