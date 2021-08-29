window.onload = function () {

    let boton_generador = document.getElementById("boton_generador");
    let boton_ordenador = document.getElementById("boton_ordenador");
    let contenedor_cartas = document.getElementById("contenedor_cartas");
    let numero_cartas = document.getElementById("numero_cartas");
    let bubble_log = document.getElementById("bubble_log");

    function genera_letra(num) {
        if (num === 1) return "A";
        if (num === 11) return "J";
        if (num === 12) return "Q";
        if (num === 13) return "K";
        return num
    }

    function genera_pinta(num) {
        if (num === 1) return "♦";
        if (num === 2) return "♥";
        if (num === 3) return "♠";
        if (num === 4) return "♣";

    }
    function array_cartas(num) {
        let array_cartas = []
        for (let i = 0; i <= num - 1; i++) {

            let num_y_letras = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
            let pintas = [1, 2, 3, 4]

            let random_pinta = Math.floor(Math.random() * 4);
            let random_numero = Math.floor(Math.random() * 13);

            let name_carta = document.createAttribute("name");
            name_carta.value = "carta"
            let cl_carta = document.createAttribute("class");
            cl_carta.value = "d-flex justify-content-between m-3";
            let id_carta = document.createAttribute("id");
            id_carta.value = "carta";
            let cl_pinta1 = document.createAttribute("class");
            cl_pinta1.value = "display-5";
            let id_pinta1 = document.createAttribute("id");
            id_pinta1.value = "pinta1";
            let cl_numero_div = document.createAttribute("class");
            cl_numero_div.value = "align-self-center"
            let cl_numero = document.createAttribute("class");
            cl_numero.value = "display-1"
            let id_numero = document.createAttribute("id");
            id_numero.value = "numero"
            let cl_pinta2_div = document.createAttribute("class");
            cl_pinta2_div.value = "align-self-end"
            let cl_pinta2 = document.createAttribute("class");
            cl_pinta2.value = "display-5"
            let id_pinta2 = document.createAttribute("id");
            id_pinta2.value = "pinta2"

            let carta = document.createElement("div");
            carta.setAttributeNode(cl_carta);
            carta.setAttributeNode(id_carta);
            carta.setAttributeNode(name_carta)
            let pinta1_div = document.createElement("div");
            let pinta1_p = document.createElement("p");
            pinta1_p.setAttributeNode(cl_pinta1);
            pinta1_p.setAttributeNode(id_pinta1);
            let numero_div = document.createElement("div");
            numero_div.setAttributeNode(cl_numero_div);
            let numero_p = document.createElement("p");
            numero_p.setAttributeNode(cl_numero);
            numero_p.setAttributeNode(id_numero);
            let pinta2_div = document.createElement("div");
            pinta2_div.setAttributeNode(cl_pinta2_div);
            let pinta2_p = document.createElement("p");
            pinta2_p.setAttributeNode(cl_pinta2);
            pinta2_p.setAttributeNode(id_pinta2);

            numero_p.innerHTML = genera_letra(num_y_letras[random_numero]);
            let pintara = genera_pinta(pintas[random_pinta]);
            pinta1_p.innerHTML = pintara;
            pinta2_p.innerHTML = pintara;

            if (pintara == "♦" || pintara == "♥") {
                pinta1_p.classList.add("text-danger");
                pinta2_p.classList.add("text-danger");
            }

            pinta1_div.appendChild(pinta1_p);
            numero_div.appendChild(numero_p);
            pinta2_div.appendChild(pinta2_p);
            carta.appendChild(pinta1_div);
            carta.appendChild(numero_div);
            carta.appendChild(pinta2_div);
            array_cartas.push(carta)
            
        }
        
        return array_cartas
    }
    let mazo_glob = []
    console.log(mazo_glob)
    let cantidad_glob = []

    boton_generador.addEventListener("click", function () {
        contenedor_cartas.innerHTML = "";
        let cantidad_cartas = numero_cartas.value;
        cantidad_glob.push(cantidad_cartas)
        let mazo = array_cartas(cantidad_cartas);
        mazo_glob.push(mazo)
        for (let i = 0; i <= cantidad_cartas; i++ ) {
            contenedor_cartas.appendChild(mazo[i])
            console.log(mazo[i])
        }
    });

    boton_ordenador.addEventListener("click", function () {
        bubbleSort.innerHTML = "";
        let orden = bubbleSort(mazo_glob)
        for (let i = 0; i <= cantidad_glob; i++ ) {
            bubble_log.appendChild(mazo_glob[i])
            console.log(orden[i])
        }
    })

    const bubbleSort = (cartas) => {
        let orden = [...cartas]
        let wall = orden.length - 1;
        while (wall > 0) {
            let index = 0;
            while (index < wall) {
                if (orden[index][1] > orden[index + 1][1]) {
                    let aux = orden[index];
                    orden[index] = orden[index + 1];
                    orden[index + 1] = aux;
                }
                index++;
            }
            wall--;
        }
        console.log(orden)
        return orden;
    };




}