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