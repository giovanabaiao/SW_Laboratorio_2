// Importar clases
import { Humano } from "./humano.js"
import { Maquina } from "./maquina.js"
import { Extraterrestre } from "./extraterrestre.js"

// The Fisher-Yates algorithm for shuffling an array
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// Inicializar un único array con 50 maquinas, 50 humanos y 50 extraterrestres
let campo = []

// Ordenar los elementos del array al azar
for (let i = 1; i <= 50; i++) {
    campo.push(new Humano(`h${i}`))
    campo.push(new Maquina(`m${i}`))
    campo.push(new Extraterrestre(`e${i}`))
}

shuffleArray(campo);

// Imprimir el campo
console.log(campo)
// Para ir imprimiendo los turnos
let turno = 1

// Mientras quede mas de un jugador en el array pelear por parejas
while (campo.length > 1) {
    console.log(`Turno: ${turno}`)

    // Pelear por parejas. Si los elementos que quedan en el array son impares, el último no pelea

    for (let i = 0; i < campo.length - 1; i += 2) {
        let jugador1 = campo[i]
        let jugador2 = campo[i + 1]

        jugador1.luchar(jugador2)

        console.log(`${jugador1.nombre} vs ${jugador2.nombre}`)
        console.log(`Salud de ${jugador1.nombre}: ${jugador1.salud}`)
        console.log(`Salud de ${jugador2.nombre}: ${jugador2.salud}`)
    }

    // eliminar los que se quedan fuera

    campo = campo.filter(jugador => jugador.salud > 0);
    shuffleArray(campo); // ordernar
    turno++
}

// Imprimir campeón. Unico elemento que queda en el array
console.log("Campeón: " + campo[0].nombre);
