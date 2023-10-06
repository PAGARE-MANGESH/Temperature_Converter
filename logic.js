



function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const inputValue = temperatureInput.value;
    const message = document.getElementById('message')
    const unitSelect = document.getElementById("unit");
    const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;

    let result;
    if (inputValue === '') {

        alert('Enter vaild Temprature ')

    } else if (selectedUnit === "celsius") {

        message.innerHTML = `Celsius TO Fahrenheit `

        result = (inputValue * 9 / 5) + 32;

    } else {

        message.innerHTML = ` Fahrenheit TO  Celsius`

        result = (inputValue - 32) * 5 / 9;

    }

    document.getElementById("result").innerText = `${inputValue}°${selectedUnit.toUpperCase()} = ${result.toFixed(2)}°${selectedUnit === "celsius" ? " F " : "C "}`
    // Save to history
    const historyList = document.getElementById("history-list");
    const historyItem = document.createElement("li");
    historyItem.innerText = `${inputValue}°${selectedUnit.toUpperCase()} = ${result.toFixed(2)}°${selectedUnit === "celsius" ? " F " : "C "}`;
    historyList.appendChild(historyItem);

    // Clear input
    setTimeout(() => {
        temperatureInput.value = '';
        temperatureInput.focus()

    }, 500)
}


function clearHistory() {
    message.innerHTML = ''
    document.getElementById("result").innerText = ""
    document.getElementById("history-list").innerHTML = "";
}


//  vanila-tilt.js

VanillaTilt.init(document.querySelector("#title"), {
    max: 15,
    glare: false,
    speed: 300
});


