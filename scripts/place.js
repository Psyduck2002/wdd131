const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent =
    "Last Modification: " + document.lastModified;

function calculateWindChill(temp, speed) {
    if (temp <= 50 && speed > 3) {
        const windChill =
            35.74 +
            (0.6215 * temp) -
            (35.75 * Math.pow(speed, 0.16)) +
            (0.4275 * temp * Math.pow(speed, 0.16));

        return `${windChill.toFixed(1)} °F`;
    }

    return "N/A";
}

const temperature = 90;
const windSpeed = 6;

document.getElementById("windChill").textContent =
    calculateWindChill(temperature, windSpeed);