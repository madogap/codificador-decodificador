
function errorReplaceClass() {
    document.getElementById('textoVetor').classList.replace("alertVetor", "pError");
    document.getElementById('iconeVetor').classList.replace("vetor", "vetorError");
    document.getElementById('area').classList.replace("boxArea", "boxAreaError");
    document.getElementById('areaDecodificacao').classList.replace("localTexto", "localTextoError");
}

function errorFormatClass() {
    document.getElementById('textoVetor').classList.replace("pError", "alertVetor");
    document.getElementById('iconeVetor').classList.replace("vetorError", "vetor");
    document.getElementById('area').classList.replace("boxAreaError", "boxArea");
    document.getElementById('areaDecodificacao').classList.replace("localTextoError", "localTexto");
}

function copiar() {

    const textoParaCopiar = document.getElementById('areaDecodificacao').innerHTML;

    if (navigator.clipboard.writeText(textoParaCopiar)) {
        document.getElementById("copiar").textContent = 'COPIADO';
        limpaAreaDigitada();
        document.getElementById("digiteTexto").placeholder = 'Texto copiado...';
    }

    setInterval(function () {
        document.getElementById("copiar").textContent = 'Copiar';
        document.getElementById("digiteTexto").placeholder = 'Cole aqui, ou digite outro texto..';
        }, 5000
    );
}

function limpaAreaTexto() {
    document.getElementById('areaDecodificacao').innerHTML = "";
    document.getElementById('secondArea').innerHTML = "";
}

function limpaAreaDigitada() {
    document.getElementById('digiteTexto').value = "";
}

function botaoCopiar() {
    
    const copyButton =
        "<div>" +
        "<button id='copiar' onclick='copiar()'>" + "Copiar" + "</button>" +
        "</div>";
    return document.getElementById('secondArea').innerHTML += copyButton; 
}

export { errorFormatClass, errorReplaceClass, copiar, limpaAreaDigitada, limpaAreaTexto, botaoCopiar };