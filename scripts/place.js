// Get the current year for the copyright
const copyrightYearSpan = document.getElementById("current-year");
const currentYear = new Date().getFullYear();
copyrightYearSpan.textContent = currentYear;

// Get the last modified date of the document
const lastModifiedSpan = document.getElementById("last-modified");
const lastModifiedDate = document.lastModified;
lastModifiedSpan.textContent = lastModifiedDate;

//2. Calculating the windchill function
// Creating Static values matching the displayed values
const temperature = 10; // °C
const windSpeed = 4.8;   // km/h

function calculateWindChill(tempC, speedKmh) {
    // Convert Celsius to Fahrenheit and km/h to mph
    const tempF = (tempC * 9 / 5) + 32;
    const speedMph = speedKmh * 0.621371;
    // Wind chill formula for Fahrenheit and mph
    return (tempF <= 50 && speedMph > 3)
        ? Math.round(35.74 + 0.6215 * tempF - 35.75 * Math.pow(speedMph, 0.16) + 0.4275 * tempF * Math.pow(speedMph, 0.16))
        : "N/A";
}

document.getElementById('windchill').textContent = calculateWindChill(temperature, windSpeed) + " °C";


