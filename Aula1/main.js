const num1 = document.getElementById('input-num1');
const num2 = document.getElementById('input-num2');
const span = document.getElementById('result');

function calcular() {
    try {
        const result = parseInt(num1.value) + parseInt(num2.value);
        span.innerText = `Resultado: ${result}`;

    } catch (error) {
        span.innerText = `Não foi possível realizar a operação.`;
        result.classList.add('error');
    }
}
