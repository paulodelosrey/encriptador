const textoAEncriptar = document.getElementById("texto1")
const parrafo = document.getElementById("parrafo")
const gif = document.getElementById("gif")
const encriptar = document.getElementById("encriptar")
const desencriptar = document.getElementById("desencriptar")
const reiniciar = document.getElementById("reiniciar")


const matrizDeEncriptacion = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];


textoAEncriptar.addEventListener("focus", () => {
    parrafo.textContent = "Escribiendo..."
    gif.src = "typing.gif"
    })

textoAEncriptar.addEventListener("blur", () => {
    parrafo.textContent = "No has encriptado ningun texto"
    gif.src = "penguin.gif";
    });

textoAEncriptar.addEventListener("input", (e) => {
    const texto = e.target.value;
    const textoMinusculas = texto.toLowerCase();
    textoAEncriptar.value = textoMinusculas.replace(/[^a-zA-Z0-9 ]/g, "")
    });

encriptar.addEventListener("click", ()=> {
    for(let i = 0; i < matrizDeEncriptacion; i++) {
        if (textoAEncriptar.value.includes(matrizDeEncriptacion[i[0]])) {
            textoAEncriptar.value.replace(matrizDeEncriptacion[i[0]], matrizDeEncriptacion[i[1]])
        }
    }     
})

