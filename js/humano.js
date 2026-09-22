import { Jugador } from "./jugador.js";

export class Humano extends Jugador {
    constructor(miNombre) {
        super(miNombre, 70, 150);
    }
}