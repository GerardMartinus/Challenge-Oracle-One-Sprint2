var palavras = [
    "LIXO", "NINJA", "EXPLOSAO", "CENOURA", "BRUNO",
    "PEPE", "PIPA", "CAFE", "AMEI", "COMIDA", "CAIXA",
    "PELE", "CAVALO", "GATO"
];
var quantidadeErros = 0;
var acertos = 0;
var tentativas = "";
const palavraSecreta = 
    palavras[Math.floor(Math.random() * palavras.length)]

//Desenho
var tela = document.querySelector("canvas");
var pincel = tela.getContext('2d');

desenhaBase();
desenhaLinhas();

window.onkeypress = teclaPressionada;

function teclaPressionada(){
    if (!tentativas.includes(event.key) && palavraSecreta.includes((event.key).toUpperCase())){
        adicionaTentativa();
        for (var i = 0; i < palavraSecreta.length; i++){
            if (palavraSecreta[i] == (event.key).toUpperCase()){
                pincel.font = "35px Arial";
                pincel.fillStyle = 'black';
                pincel.fillText((event.key).toUpperCase(), 30 + (35 * i), 395);
                acertos++;
            }
        }
    } else {
        adicionaTentativa();
        quantidadeErros++;
        desenhaBoneco(quantidadeErros);
    }
    verificaFimJogo();
}

function adicionaTentativa() {
    if (!tentativas.includes(event.key) && tentativas != palavraSecreta.length){
        tentativas = tentativas + event.key;
        pincel.font = "20px Arial";
        pincel.fillStyle = 'red';
        pincel.fillText("Tentativas: " + tentativas.toUpperCase(), 20, 270);
    } 
}

function verificaFimJogo(){
    if (quantidadeErros >= 6){
        pincel.font='30px arial';
        pincel.fillStyle = 'red'
        pincel.lineWidth = 4;
        pincel.fillText("Você perdeu...", 20, 330);
        window.onkeypress = null;
        return;
    }
    if (acertos == palavraSecreta.length){
        pincel.font='30px arial';
        pincel.fillStyle = 'green'
        pincel.fillText("Você Ganhou!", 20, 330);
        window.onkeypress = null;
        return;
    }
}


//forca = base
function desenhaBase(){
pincel.moveTo(70, 50);
pincel.lineTo(70, 250);
pincel.lineWidth = 2;
pincel.stroke();

pincel.moveTo(50, 250);
pincel.lineTo(90, 250);
pincel.lineWidth = 2;
pincel.stroke();

pincel.moveTo(68, 50);
pincel.lineTo(160, 50);
pincel.lineWidth = 2;
pincel.stroke();

pincel.moveTo(158, 50);
pincel.lineTo(158, 80);
pincel.lineWidth = 2;
pincel.stroke();
}

function desenhaLinhas(){
    for (var i = 0; i < palavraSecreta.length; i++){
        pincel.moveTo(28 + (35 * i), 400);
        pincel.lineTo(58 + (35 * i), 400);
        pincel.lineWidth = 2;
        pincel.stroke();
    }

}

//boneco
function desenhaBoneco(quantidadeErros){
    switch (quantidadeErros){
        case 1:
            desenhaCabeca();
            break;
        case 2:
            desenhaTronco();
            break;
        case 3:
            desenhaBracoDireito();
            break;
        case 4:
            desenhaBracoEsquerdo();
            break;
        case 5:
            desenhaPernaDireita();
            break;
        case 6:
            desenhaPernaEsquerda();
            break;
    }
}

//cabeça
function desenhaCabeca(){
    pincel.beginPath();
    pincel.arc(158, 100, 20, 0, Math.PI * 2, true); // Círculo exterior
    pincel.stroke();
}
//tronco
function desenhaTronco(){
    pincel.moveTo(158, 120);
    pincel.lineTo(158, 180);
    pincel.lineWidth = 2;
    pincel.stroke();
}
//braço esquerdo
function desenhaBracoEsquerdo(){
    pincel.moveTo(158, 120);
    pincel.lineTo(138, 150);
    pincel.lineWidth = 2;
    pincel.stroke();
}
//braço direito
function desenhaBracoDireito(){
    pincel.moveTo(158, 120);
    pincel.lineTo(178, 150);
    pincel.lineWidth = 2;
    pincel.stroke();
}
//perna esquerda
function desenhaPernaEsquerda(){
    pincel.moveTo(158, 180);
    pincel.lineTo(138, 230);
    pincel.lineWidth = 2;
    pincel.stroke();
}

//perna direita
function desenhaPernaDireita(){
    pincel.moveTo(158, 180);
    pincel.lineTo(178, 230);
    pincel.lineWidth = 2;
    pincel.stroke();
}


function adicionaPalavra(){
    let novaPalavra = document.getElementById("entrada-texto1").value;
    palavras.push(novaPalavra);
    console.log(palavras);
    window.location.href = '/jogo.html';
}


function reiniciarJogo() {
    window.location.reload();
}