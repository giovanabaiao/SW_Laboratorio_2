import { Jugador } from "./jugador.js";

export class Extraterrestre extends Jugador {
    constructor(miNombre) {
        const fuerza = Math.floor(Math.random() * 85) + 1;
        super(miNombre, fuerza, 150);
    }

    get nombre() {
        return this.miNombre.split("").reverse().join("");
    }
}