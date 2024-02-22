import { limpaAreaDigitada, limpaAreaTexto, errorReplaceClass, errorFormatClass } from "./interface.js"; 

function semMensagem () {
    let mensagem = ('<div class="msgInicial">' +
        ' <img src="./assets/style/img/second.png" width="336" alt="Imagem second">' +
        '<p class="titulo">Nenhuma mensagem encontrada.</p>' +
        '<p class="msn_alerta">Digite um texto que você deseja criptografar ou descriptografar.</p>' +
        '</div>');

    document.getElementById('areaDecodificacao').innerHTML += mensagem;

}

function error() {
    limpaAreaTexto();
    errorReplaceClass();
    let mensagem = ('<div class="msg_error">' +
        '<p class="titulo">ERROR</p>' +
        '<p class="msn_alerta">Você digitou caracteres inválidos.' + '</br> ' + 'Tente Novamente...' +
        '</div>');

    setTimeout(function () {
        limpaAreaTexto();
        limpaAreaDigitada();
        errorFormatClass();
        semMensagem();
        document.getElementById("digiteTexto").placeholder = 'Tente novamente...';
    }, 3000
    );
    document.getElementById('areaDecodificacao').innerHTML += mensagem;
}

function error2() {
    limpaAreaTexto();
    errorReplaceClass();
    let mensagem = ('<div class="msg_error">' +
        '<p class="titulo">ERROR</p>' +
        '<p class="msn_alerta">Digite algo!' +
        '</div>');

    setTimeout(function () {
        limpaAreaTexto();
        limpaAreaDigitada();
        errorFormatClass()
        semMensagem();
        document.getElementById("digiteTexto").placeholder = 'DIGITE AQUI...';
    }, 2000
    );
    document.getElementById('areaDecodificacao').innerHTML += mensagem;
}

export { semMensagem, error, error2 };