function calcularAgua() {
    const peso = parseFloat(document.getElementById('peso').value);
    const quantidadeAgua = peso * 0.035;
    document.getElementById('resultado').innerHTML = `Meta de água: ${quantidadeAgua.toFixed(2)} litros`;

    const recomendacoes = `**Recomendações:**<br>
        * Beba a água ao longo do dia, dividindo em pequenas porções.<br>
        * Mantenha uma garrafa de água sempre à mão.<br>
        * Beba água antes, durante e depois de exercícios físicos.<br>
        * Monitore a cor da sua urina para garantir que você esteja hidratado.<br>`;

    document.getElementById('recomendacoes').innerHTML = recomendacoes;
}
