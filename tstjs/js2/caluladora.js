function calculateTip() {
    // Obter valores dos inputs
    var billAmount = parseFloat(document.getElementById("billAmount").value);
    var tipPercentage = parseFloat(document.getElementById("tipPercentage").value);

    // Verificar se os valores são válidos
    if (isNaN(billAmount) || isNaN(tipPercentage) || tipPercentage < 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    // Calcular a gorjeta e o total da conta
    var tipAmount = (billAmount * (tipPercentage / 100)).toFixed(2);
    var totalAmount = (billAmount + parseFloat(tipAmount)).toFixed(2);

    // Exibir os resultados na página
    document.getElementById("tipAmount").textContent = "$" + tipAmount;
    document.getElementById("totalAmount").textContent = "$" + totalAmount;
}
