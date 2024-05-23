function executar(){
    var textoElemento = document.getElementById('texto-para-formatar');

    var texto = document.getElementById('texto-para-formatar').value;
    var fonte = document.getElementById('idFont').value;
    var tamanho = document.getElementById('tamanhoDaFonte').value;
    var corTexto = document.getElementById('idCor').value;
    var corBg = document.getElementById('idCorBg').value;

    var elementoParaFormatacao = document.getElementById('texto-formatado-espelho');

    elementoParaFormatacao.innerHTML = texto
    elementoParaFormatacao.style.fontFamily = fonte;
    elementoParaFormatacao.style.fontSize = tamanho+'px';
    elementoParaFormatacao.style.color = corTexto;
    elementoParaFormatacao.style.background = corBg;
}