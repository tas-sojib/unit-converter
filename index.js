/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputBtn = document.querySelector('input');
const convertBtn = document.getElementById('convert');

convertBtn.addEventListener('click', function() {
    const userInput = Number(inputBtn.value);

    convertMeterFeet(userInput);
    convertLiterGallon(userInput);
    convertKiloPound(userInput);
});

function convertMeterFeet(num) {
    document.getElementById("meter-feet").textContent = 
        `${num} meters = ${(num * 3.281).toFixed(3)} feet | ` +
        `${num} feet = ${(num / 3.281).toFixed(3)} meters`;
}

function convertLiterGallon(num) {
    document.getElementById("liter-gallon").textContent = 
        `${num} liters = ${(num * 0.264).toFixed(3)} gallons | ` +
        `${num} gallons = ${(num / 0.264).toFixed(3)} liters`;
}

function convertKiloPound(num) {
    document.getElementById("kilo-pound").textContent = 
        `${num} kilos = ${(num * 2.204).toFixed(3)} pounds | ` +
        `${num} pounds = ${(num / 2.204).toFixed(3)} kilos`;
}
