let temperatureEl = document.getElementById("temperature")
let errorEle = document.getElementById("error")
temperatureEl.addEventListener("blur", function() {
    if (temperatureEl.value === "") {
        errorEle.textContent = "*Required"
    } else {
        errorEle.textContent = ""
    }
})
let fromTempEle = document.getElementById("fromTemp")
let toTempEle = document.getElementById("toTemp")
let tempMessEle = document.getElementById("tempMess")
let convertBtEle = document.getElementById("convertBtn")
convertBtEle.onclick = function() {
    let temperatureEl = document.getElementById("temperature")
    if (fromTempEle.value === "Celsius" && toTempEle.value === "Fahrenheit") {
        let a = parseInt(temperatureEl.value);
        let result = (a * 9 / 5) + 32;
        tempMessEle.textContent = JSON.stringify(result);
    } else if (fromTempEle.value === "Celsius" && toTempEle.value === "Kelvin") {
        let a = parseInt(temperatureEl.value);
        let result = (a + 273.15);
        tempMessEle.textContent = JSON.stringify(result);
    } else if (fromTempEle.value === "Celsius" && toTempEle.value === "Rankine") {
        let a = parseInt(temperatureEl.value);
        let result = (a + 273.15) * 9 / 5;
        tempMessEle.textContent = JSON.stringify(result);
    } else if (fromTempEle.value === "Fahrenheit" && toTempEle.value === "Celsius") {
        let a = parseInt(temperatureEl.value);
        let result = (a - 32) * 5 / 9;
        tempMessEle.textContent = JSON.stringify(result);
    } else if (fromTempEle.value === "Fahrenheit" && toTempEle.value === "Kelvin") {
        let a = parseInt(temperatureEl.value);
        let result = (a - 32) * 5 / 9 + 273.15;
        tempMessEle.textContent = JSON.stringify(result);
    } else if (fromTempEle.value === "Fahrenheit" && toTempEle.value === "Rankine") {
        let a = parseInt(temperatureEl.value);
        let result = a + 459.67;
    } else if (fromTempEle.value === "Kelvin" && toTempEle.value === "Celsius") {
        let a = parseInt(temperatureEl.value);
        let result = a - 273.15;
        tempMessEle.textContent = JSON.stringify(result);
    } else if (fromTempEle.value === "Kelvin" && toTempEle.value === "Fahrenheit") {
        let a = parseInt(temperatureEl.value);
        let result = (a - 273.15) * 9 / 5 + 32
        tempMessEle.textContent = JSON.stringify(result);
    } else if (fromTempEle.value === "Kelvin" && toTempEle.value === "Rankine") {
        let a = parseInt(temperatureEl.value);
        let result = a * 9 / 5
        tempMessEle.textContent = JSON.stringify(result);
    } else if (fromTempEle.value === "Rankine" && toTempEle.value === "Celsius") {
        let a = parseInt(temperatureEl.value);
        let result = (a - 491.67) * 5 / 9
        tempMessEle.textContent = JSON.stringify(result);
    } else if (fromTempEle.value === "Rankine" && toTempEle.value === "Fahrenheit") {
        let a = parseInt(temperatureEl.value);
        let result = a - 459.67;
        tempMessEle.textContent = JSON.stringify(result);
    } else if (fromTempEle.value === "Rankine" && toTempEle.value === "Kelvin") {
        let a = parseInt(temperatureEl.value);
        let result = a / 1.8;
        tempMessEle.textContent = JSON.stringify(result);
    } 
     else if (temperatureEl.value === "") {
            tempMessEle.textContent = "Enter a valid temperature"
        }
    else {
        tempMessEle.textContent = "Select a valid conversion"
    }
}





