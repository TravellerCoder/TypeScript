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
