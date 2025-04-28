"use strict";
//Tipos de datos y como se traspilan de typescript a javascript
let saludo = "Hola mundo"; //string
let edad = 25; //number
let esEstudiante = true; //boolean
let fechaNacimiento = new Date(1998, 11, 25); //Date
let listaDeNumeros = [1, 2, 3, 4, 5]; //Array<number>
let listaDeNombres = ["Juan", "Pedro", "Maria"]; //Array<string>
let colores = ["rojo", "verde", "azul"]; //Array<string>
var diasDeLaSemana;
(function (diasDeLaSemana) {
    diasDeLaSemana[diasDeLaSemana["Lunes"] = 0] = "Lunes";
    diasDeLaSemana[diasDeLaSemana["Martes"] = 1] = "Martes";
    diasDeLaSemana[diasDeLaSemana["Miercoles"] = 2] = "Miercoles";
    diasDeLaSemana[diasDeLaSemana["Jueves"] = 3] = "Jueves";
    diasDeLaSemana[diasDeLaSemana["Viernes"] = 4] = "Viernes";
    diasDeLaSemana[diasDeLaSemana["Sabado"] = 5] = "Sabado";
    diasDeLaSemana[diasDeLaSemana["Domingo"] = 6] = "Domingo";
})(diasDeLaSemana || (diasDeLaSemana = {}));
let hoy = diasDeLaSemana.Lunes; //Enum
//Funciones con tipos y parametros de retorno 
function saludar(nombre) {
    return `Hola como estas ${nombre}`;
}
console.log(saludar("Juan"));
function saludar2(nombre) {
    console.log(`Hola ${nombre} nuevamente desde TypeScript `);
}
saludar2("Juan");
//Clases con propiedades y metodos tipados 
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    mostrarDetalle() {
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`);
    }
}
let producto1 = new Producto("Camiseta", 20);
producto1.mostrarDetalle(); // El producto Camiseta tiene un precio de 20
let colorDelSemaforo = "rojo"; //En este caso no se puede asignar un valor que no se encuentre dentro de la variable de tipo semaforo, 
// ya que nos estamos refiriendo a los valores de una variable que ya estan declaradas.
//Uso de tipos genericos
function duplicar(valor) {
    return valor;
}
let resultado = duplicar(5); // 5
let resultado2 = duplicar("Hola"); // "Hola"
let usuario = {
    nombre: "Juan",
    edad: 25,
    esEstudiante: true,
    calle: "Av. Siempre Viva",
    ciudad: "Springfield",
    pais: "USA",
    telefono: "123456789"
};
console.log(usuario);
