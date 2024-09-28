async function obterTaxas(moedaBase) {
    try {
        const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${moedaBase}`);
        const data = await response.json();
        return data.rates;
    } catch (error) {
        console.error('Erro ao buscar taxas de câmbio:', error);
        return null;
    }
}

async function converterMoeda() {
    const valor = parseFloat(document.getElementById('valor').value);
    const moedaBase = document.getElementById('moedaBase').value;
    const moedaDestino = document.getElementById('moedaDestino').value;

    if (isNaN(valor)) {
        document.getElementById('resultado').innerText = 'Por favor, insira um valor válido.';
        return;
    }

    const taxas = await obterTaxas(moedaBase);
    
    if (taxas && moedaDestino in taxas) {
        const resultado = valor * taxas[moedaDestino];
        document.getElementById('resultado').innerText = 
            `${valor} ${moedaBase} = ${resultado.toFixed(2)} ${moedaDestino}`;
        
        document.getElementById('debug').innerText = 
            `Taxa de ${moedaBase} para ${moedaDestino}: ${taxas[moedaDestino]}`;
    } else {
        document.getElementById('resultado').innerText = 'Erro ao obter taxa de câmbio.';
    }
}
