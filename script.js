function calcularAgua() {
    const peso = parseFloat(document.getElementById('peso').value);
    const quantidadeAgua = peso * 0.035;
    document.getElementById('resultado').innerHTML = `Meta de água: ${quantidadeAgua.toFixed(2)} litros`;

    const recomendacoes = `**Recomendações:**<br>
    * DICA DE OURO: Acorde, raspe sua língua e já comece seu dia com 500ml de água em jejum.<br>
      * Beba a água ao longo do dia, cuidado para não beber muita água perto da hora de dormir, não é bom para seu sono acordar para ir ao banheiro.<br>
      * Mantenha uma garrafa de água sempre à mão.<br>
      * Monitore a cor da sua urina para garantir que você esteja hidratado, a cor ideal da urina é amarelo-clara.<br>`;

    document.getElementById('recomendacoes').innerHTML = recomendacoes;
}
