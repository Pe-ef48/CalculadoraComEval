const tela = document.getElementById("tela");

function aparecerNaTela(input) {
    tela.value += input;
}

function calcular() {
    try {
        tela.value = eval(tela.value);
    }
    catch(error) {
        tela.value = "Erro";
    }
}

function limpar() {
    tela.value = "";
}