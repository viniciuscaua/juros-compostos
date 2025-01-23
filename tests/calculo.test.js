const { calcularJurosCompostos } = require('../src/calculo');

describe('Testes de Juros Compostos', () => {
    test('Cálculo com valores positivos', () => {
        const resultado = calcularJurosCompostos(1000, 5, 2);
        expect(resultado).toBeCloseTo(1102.50, 2);  // Espera-se 1102.50
    });

    test('Cálculo com valores negativos', () => {
        const resultado = calcularJurosCompostos(1000, -5, 2);
        expect(resultado).toBeCloseTo(902.50, 2);  // Espera-se 902.50
    });
});
