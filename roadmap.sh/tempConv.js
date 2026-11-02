let celsiusToFahrenheit=(celsius)=> {
    return ((celsius *9/5) + 32)
}
let fahrenheitToCelsius=(fahrenheit)=> {
    return (5/9 *(fahrenheit-32))
}
let formatTemperature=(value, unit)=>{
    return (value.toString() + " " + unit)
}
const fahrenheit = celsiusToFahrenheit(25);
console.log(formatTemperature(fahrenheit, 'F'));
const celsius = fahrenheitToCelsius(68);
console.log(formatTemperature(celsius, 'C'));
const freezingFahrenheit = celsiusToFahrenheit(0);
console.log(formatTemperature(freezingFahrenheit, 'F'));
const freezingCelsius = fahrenheitToCelsius(32);
console.log(formatTemperature(freezingCelsius, 'C'));