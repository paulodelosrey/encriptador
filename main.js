const textoAEncriptar = document.getElementById("texto1")
const parrafo = document.getElementById("parrafo")
const gif = document.getElementById("gif")
const encriptar = document.getElementById("encriptar")
const desencriptar = document.getElementById("desencriptar")
const reiniciar = document.getElementById("reiniciar")
const parrafoTextoEncriptado = document.getElementById("parrafoTextoEncriptado")
const textoEncriptado = document.getElementById("textoEncriptado")
const copiar = document.getElementById("copiar")

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

    

    encriptar.addEventListener("click", () => {
        let texto = textoAEncriptar.value.toLowerCase()
        let matrizDeEncriptacion = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
        ];
        for (let i = 0; i < matrizDeEncriptacion.length; i++) {
        if (texto.includes(matrizDeEncriptacion[i][0])) {
            texto = texto.replaceAll(matrizDeEncriptacion[i][0], matrizDeEncriptacion[i][1]);
        }
        }
        parrafo.style.display = "none"
        gif.style.display = "none"
        parrafoTextoEncriptado.style.display = "block"
        textoEncriptado.textContent = texto
        textoEncriptado.style.display = "block"
        desencriptar.disabled= false
        copiar.disabled = false
        reiniciar.disabled = false
    });


    reiniciar.addEventListener("click", ()=>{
        location.reload()
    })
    
    copiar.addEventListener("click", () => {
        textoEncriptado.select()
        document.execCommand("copy")
        alert("Copiado al portapapeles")
    })

    desencriptar.addEventListener("click", () => {
        
        let texto = textoAEncriptar.value.toLowerCase()
        let matrizDeEncriptacion = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
        ];
        for (let i = 0; i < matrizDeEncriptacion.length; i++) {
        if (texto.includes(matrizDeEncriptacion[i][1])) {
            texto = texto.replaceAll(matrizDeEncriptacion[i][1], matrizDeEncriptacion[i][0]);
        }
        }
        parrafo.style.display = "none"
        gif.style.display = "none"
        parrafoTextoEncriptado.style.display = "block"
        textoEncriptado.textContent = texto
        textoEncriptado.style.display = "block"
    })