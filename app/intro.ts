//Tipos de datos y como se traspilan de typescript a javascript


let saludo : string = "Hola mundo"; //string

let edad : number = 25; //number

let esEstudiante : boolean = true; //boolean

let fechaNacimiento : Date = new Date(1998, 11, 25); //Date

let listaDeNumeros : number[] = [1, 2, 3, 4, 5]; //Array<number>

let listaDeNombres : Array<string> = ["Juan", "Pedro", "Maria"]; //Array<string>

let colores : string[] = ["rojo", "verde", "azul"]; //Array<string>

enum diasDeLaSemana {
    Lunes,
    Martes, 
    Miercoles, 
    Jueves, 
    Viernes,
    Sabado,
    Domingo 
}

let hoy : diasDeLaSemana = diasDeLaSemana.Lunes; //Enum

//Funciones con tipos y parametros de retorno 

function saludar (nombre: string):string {
    return `Hola como estas ${nombre}`;
}

console.log(saludar("Juan"));

function saludar2 (nombre: string) : void{
    console.log(`Hola ${nombre} nuevamente desde TypeScript `);
}

saludar2("Juan");

//Clases con propiedades y metodos tipados 

class Producto {
    constructor( public nombre: string, public precio: number) {}
    mostrarDetalle(): void {
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`);
    }
}

let producto1 = new Producto("Camiseta", 20);
producto1.mostrarDetalle(); // El producto Camiseta tiene un precio de 20

type Semaforo = "rojo" | "amarillo" | "verde"; //Union de tipos

let colorDelSemaforo: Semaforo = "rojo" //En este caso no se puede asignar un valor que no se encuentre dentro de la variable de tipo semaforo, 
                                        // ya que nos estamos refiriendo a los valores de una variable que ya estan declaradas.

//Uso de tipos genericos

function duplicar<T>(valor: T): T { //Que reciba un valor de tipo T es la puerta que habilita que la funcion reciba un parametro de tipo ANY, es lo que utilizamos si no sabemos que valor obtendremos en ese paarametro.
    return valor;
}

let resultado = duplicar<number>(5); // 5
let resultado2 = duplicar<string>("Hola"); // "Hola"

//Uso de interfaces para definir la estructura de un objeto

interface Usuario {
    nombre: string;
    edad: number;
    esEstudiante: boolean;
}

interface Direccion {
    calle: string;
    ciudad: string;
    pais: string;
}

interface UsuarioConDireccion extends Usuario, Direccion { //Interfaz que hereda de otras interfaces
    telefono: string;
}

let usuario: UsuarioConDireccion = {
    nombre: "Juan",
    edad: 25,
    esEstudiante: true,
    calle: "Av. Siempre Viva",
    ciudad: "Springfield",
    pais: "USA",
    telefono: "123456789"
}

console.log(usuario);