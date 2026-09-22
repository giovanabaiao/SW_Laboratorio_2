export class Jugador {
    constructor(miNombre, fuerza, salud) {
        this.miNombre = miNombre;
        this.fuerza = fuerza;
        this.salud = salud;
    }

    get nombre() {
        return this.miNombre;
    }

    luchar(jugador) {
        if (Math.random() * this.fuerza > jugador.fuerza) {
            jugador.salud -= this.fuerza;
        } else {
            this.salud -= jugador.fuerza;
        }
    }
}