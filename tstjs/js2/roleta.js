function pullTrigger() {
    const survived = Math.random() < 0.5; // Probabilidade de sobreviver: 50%

    if (survived) {
        document.getElementById("result").textContent = "Você puxou o gatilho e sobreviveu!";
    } else {
        document.getElementById("result").textContent = "Bang! Você puxou o gatilho e... bem, você sabe.";
    }

    // Desabilitar o botão após o uso
    document.querySelector("button").disabled = true;
}
