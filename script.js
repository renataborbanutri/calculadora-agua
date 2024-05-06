function calcularAgua() {
    const peso = parseFloat(document.getElementById('peso').value);
    const quantidadeAgua = peso * 0.035;
    document.getElementById('resultado').innerHTML = `Meta de água: ${quantidadeAgua.toFixed(2)} litros`;
}
