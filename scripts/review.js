let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

reviewCount++;

localStorage.setItem("reviewCount", reviewCount);

const reviewCountDisplay = document.querySelector("#reviewCount");

if (reviewCountDisplay) {
    reviewCountDisplay.textContent = reviewCount;
}

const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;

document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;