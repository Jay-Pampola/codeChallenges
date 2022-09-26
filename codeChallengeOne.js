//Temperature Forecast

// forecast today in Kelvin
const kelvin = 293;
// kelvin to celsius
const celsius = kelvin - 273;
// celsius to fahrenheit
const fahrenheit = Math.floor(celsius * (9 / 5) + 32);
console.log(`The temperature is ${kelvin} degrees Kelvin.`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${celsius} degrees Celsius.`);
const newton = Math.floor(celsius * (33 / 100));
console.log(`The temperature is ${newton} degrees Newton.`);