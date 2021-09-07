
const cardContainer = document.getElementById("cardContainer")
const bubbleLog = document.getElementById("bubbleLog")
const input = document.getElementById("input")
const draw = document.getElementById("draw")
const sort = document.getElementById("sort")

const cartas = []
console.log(cartas)
const cartasDos = []

console.log(cartasDos)

function generadorCartasRandom(num = []) {
    const listaNumero = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    const listaPinta = ["♥", "♦", "♣", "♠"];
    for (let i = 0; i < num; i++) {
        const carta = document.createElement("div")
        carta.className = "carta"
        const generadorPinta = listaPinta[Math.floor(Math.random() * listaPinta.length)]
        const numeroRand = Math.floor(Math.random() * listaNumero.length)
        const generadorValor = listaNumero[numeroRand]
        carta.innerHTML = generadorPinta + generadorValor + generadorPinta;
        cartas.push({ valor: numeroRand, pinta: generadorPinta })
        cardContainer.appendChild(carta)
        console.log(carta)
    }
    return cartas
}

function impresorCartas(arr = []) {
    const listaNumero = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    const contCarta = document.createElement("div");
    contCarta.className = "d-flex contCarta"
    bubbleLog.appendChild(contCarta);
    for (let i = 0; i < arr.length; i++) {
        const carta = document.createElement("div")
        carta.className = "d-flex carta"
        const generadorValor = listaNumero[arr[i].valor]
        carta.innerHTML = arr[i].pinta + generadorValor + arr[i].pinta;
        contCarta.appendChild(carta)
    }
}
window.onload = function () {
    draw.addEventListener("click", () => {
        generadorCartasRandom(input.value)
        console.log(cartas)
        for(let i = 0; i < cartas.length; i++){
            cartasDos.push(cartas[i])
        }
    })

    sort.addEventListener("click", () => {
        bubbleSort(cartasDos)
        console.log(cartasDos)
    })
}
const bubbleSort = (arr = []) => {
    let wall = arr.length - 1;
    while (wall > 0) {
        let index = 0;
        while (index < wall) {
            if (arr[index].valor > arr[index + 1].valor) {
                let aux = arr[index + 1];
                arr[index + 1] = arr[index];
                arr[index] = aux;
                impresorCartas(arr)
            }
            index++;
        }
        wall--;
    }
    
    return arr;
}




