import { error2, error} from './mensagens.js';
import { botaoCopiar, limpaAreaTexto, copiar } from './interface.js';

function verificaCaracteres(texto) {
    let textoDigitado = texto;
    let textoArray = [...textoDigitado]

    const caracteresInvalidos = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕśŚ0123456789_-!@#$%&*()";
    const caracteresInvalidosArray = [...caracteresInvalidos];

    let index = 0;
    let contador = 0;

    while (index < textoArray.length) {
        while (contador < caracteresInvalidosArray.length && textoArray[index] != caracteresInvalidosArray[contador]) {
            contador++;
        }
        if (/[A-Z]/.test(textoArray) || textoArray[index] == caracteresInvalidosArray[contador]) {
            return true;
        }
        contador = 0;
        index++;
    }
    return false;
}

function codifica(texto) {

    let textoDigitado = texto;

    let distribuidoNoArray = [...textoDigitado];

    const letras = ['a', 'e', 'i', 'o', 'u'];
    const chaves = ['ai', 'enter', 'imes', 'ober', 'ufat'];



    for (let indice = 0; indice < distribuidoNoArray.length; indice++) {

        for (let i = 0; i < letras.length; i++) {

            if (distribuidoNoArray[indice] == letras[i]) {

                const substituicao = distribuidoNoArray.indexOf(distribuidoNoArray[indice]);

                if (substituicao !== -1) {
                    distribuidoNoArray[substituicao] = chaves[i];
                }
            }
        }
    }



    const textoCodificado = distribuidoNoArray.join('');

    return textoCodificado;
}

function criptografar() {
    let texto = document.getElementById('digiteTexto').value;

    if (document.getElementById('digiteTexto').value == "") {
        error2();
    } else if (verificaCaracteres(texto) == false) {
        limpaAreaTexto();
        document.getElementById('areaDecodificacao').innerHTML += codifica(texto);
        botaoCopiar();
        copiar();
    } else {
        error();
    }

}

function descriptografar() {

    const letras = ['a', 'e', 'i', 'o', 'u'];
    const chaves = ['ai', 'enter', 'imes', 'ober', 'ufat'];


    let textoDigitado = document.getElementById('digiteTexto').value;
    let arrayDePalavras = textoDigitado.split(' ');

    if (document.getElementById('digiteTexto').value == "") {
        error2();
    } else if (verificaCaracteres(textoDigitado) == false) {
        limpaAreaTexto()
        for (let indice = 0; indice < arrayDePalavras.length; indice++) {
            for (let i = 0; i < chaves.length; i++) {
                const substituicao = arrayDePalavras.indexOf(arrayDePalavras[indice]);
                if (substituicao !== -1) {
                    arrayDePalavras[substituicao] = arrayDePalavras[indice].replaceAll(chaves[i], letras[i]);
                }
            }
        }
        let resultado = arrayDePalavras.join(' ');
        document.getElementById('areaDecodificacao').innerHTML += resultado;
        botaoCopiar();
    } else {
        error();
    }
}

export { verificaCaracteres, codifica, criptografar, descriptografar };