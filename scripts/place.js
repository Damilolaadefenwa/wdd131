// Get the current year for the copyright
const copyrightYearSpan = document.getElementById("current-year");
const currentYear = new Date().getFullYear();
copyrightYearSpan.textContent = currentYear;

// Get the last modified date of the document
const lastModifiedSpan = document.getElementById("last-modified");
const lastModifiedDate = document.lastModified;
lastModifiedSpan.textContent = lastModifiedDate;

// Static values matching the displayed values
const temperature = 32; // °F
const windSpeed = 10;   // mph

function calculateWindChill(tempF, speed) {
    // Wind chill formula for Fahrenheit and mph
    return (tempF <= 50 && speed > 3)
        ? Math.round(35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16))
        : "N/A";
}

// Display values
document.getElementById('temp').textContent = temperature;
document.getElementById('speed').textContent = windSpeed;
document.getElementById('chill').textContent = calculateWindChill(temperature, windSpeed);


