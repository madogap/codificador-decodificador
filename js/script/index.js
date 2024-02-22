import { 
    semMensagem, 
    error, 
    error2 
} from './mensagens.js';

import { 
    verificaCaracteres, 
    codifica, 
    criptografar, 
    descriptografar 
} from './criptografar.js';

import {
     errorReplaceClass,
     errorFormatClass,
     limpaAreaTexto,
     limpaAreaDigitada,
     botaoCopiar, 
     copiar
} from './interface.js';

semMensagem();

document.getElementById('btn_criptografar').addEventListener('click', criptografar);
document.getElementById('btn_descriptografar').addEventListener('click', descriptografar);