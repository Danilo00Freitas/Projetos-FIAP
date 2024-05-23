function validate_numbers_and_operations(operation) {
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);

    if (isNaN(valor1) || isNaN(valor2)) {
        document.getElementById('result').innerHTML = 'Resultado: Dados em branco, favor digitar algo!';
    } else if (valor2 === 0 && operation == dividir) {
        document.getElementById('result').innerHTML = 'Resultado: Não existe divisão por zero';
    } else {
        operation(valor1, valor2)
    }
}

function somar(valor1, valor2) {
    var resultado = valor1 + valor2;
    document.getElementById('result').innerHTML = 'Resultado: ' + resultado;
    console.log(resultado)
}

function subtrair(valor1, valor2) {
    var resultado = valor1 - valor2;
    document.getElementById('result').innerHTML = 'Resultado: ' + resultado;
    console.log(resultado)
}

function multiplicar(valor1, valor2) {
    var resultado = valor1 * valor2;
    document.getElementById('result').innerHTML = 'Resultado: ' + resultado;
    console.log(resultado)
}

function dividir(valor1, valor2) {
    var resultado = valor1 / valor2;
    document.getElementById('result').innerHTML = 'Resultado: ' + resultado;
    console.log(resultado)
}