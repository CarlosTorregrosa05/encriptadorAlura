
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

const textoEncriptar = document.querySelector(".mensaje-encriptar");
const mensaje = document.querySelector(".mensaje-encriptado");

function copiar() {
    let copiar = document.querySelector(".mensaje-encriptado");
    copiar.select();
    copiar.setSelectionRange(0, 999999);
    document.execCommand('copy');
}

textoEncriptar.addEventListener("input", function () {
    let value = this.value.toLowerCase();
    value = value.replace(/[^a-z\s]/g, "");
    this.value = value;
});

function btnEncriptar() {
    const texto = textoEncriptar.value.trim();
    if (texto === "") {
        return;
    } else {
        const textoEncriptado = encriptar(textoEncriptar.value);
        mensaje.value = textoEncriptado;
        textoEncriptar.value = "";
        mensaje.style.backgroundImage = "none";
    }
};


function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        };
    };
    return stringEncriptado;


}

function btnDesencriptar() {
    const texto = textoEncriptar.value.trim();
    if (texto === "") {
        return;
    } else {
        const textoEncriptado = desencriptar(textoEncriptar.value);
        mensaje.value = textoEncriptado;
        textoEncriptar.value = "";
    }
};

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        };
    };
    return stringDesencriptado;
    function copiarTexto() {
        const resul = document.querySelector(".mensaje-encriptado");
        resul.select();
        document.execCommand("copy");
    }

}

