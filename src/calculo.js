// Função para calcular juros compostos
function calcularJurosCompostos(principal, taxa, tempo) {
    const valorFinal = principal * Math.pow(1 + taxa / 100, tempo);
    return valorFinal;
}

// Exporta a função para uso nos testes
module.exports = { calcularJurosCompostos };
