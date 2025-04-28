export interface Usuario {
    nombre: string;
    edad: number;
    esEstudiante: boolean;
}

export interface Direccion {
    calle: string;
    ciudad: string;
    pais: string;
}

export interface UsuarioConDireccion extends Usuario, Direccion { //Interfaz que hereda de otras interfaces
    telefono: string;
}

//agregando la palabra export a la interfaz podemos definirla en un archivo y luego importarla para su uso desde cualquier archivo del proyecto