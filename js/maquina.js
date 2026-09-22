import { Jugador } from "./jugador.js";

export class Maquina extends Jugador {
    constructor(miNombre) {
        const fuerza = Math.floor(Math.random() * 100) + 1;
        super(miNombre, fuerza, 130);
    }
}