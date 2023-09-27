const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje    ");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/



function btnEnciptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}



function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada

}



function btnDesnciptar() {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}



function desencriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }

    }
    return stringEncriptada

}

function leer() {
    let texto = document.getElementById('pizarra').textContent;
    return texto;
}

async function copiar() {

    // Obtén el elemento cuyo valor deseas copiar
    let textArea = document.getElementById("pizarra"); 
    console.log(textArea.value);
    // Selecciona el contenido del área de texto
    textArea.select();
    // Intenta copiar el contenido al portapapeles
    document.execCommand("copy");
    
    let copyButton = document.getElementById('copiar');
    copyButton.textContent = "¡Copiado!";
    copyButton.style.color = "white";
    setTimeout(() => copyButton.textContent = "Copiar", 1000);
    setTimeout(() => copyButton.style.color = "black", 1000);    
}


