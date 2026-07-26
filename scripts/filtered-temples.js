const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");
const templeGrid = document.querySelector(".res-grid");
const pageHeading = document.querySelector("main h1");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    const menuIsOpen = navigation.classList.contains("open");

    menuButton.textContent = menuIsOpen ? "✕" : "☰";
    menuButton.setAttribute("aria-expanded", menuIsOpen);
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Sacramento California",
    location: "Sacramento, California, United States",
    dedicated: "2006, September, 3",
    area: 19500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/sacramento-california-temple/sacramento-california-temple-8098-main.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },
  {
    templeName: "Santiago Chile",
    location: "Santiago, Chile",
    dedicated: "1983, September, 15",
    area: 20831,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/024-Santiago-Chile-Temple.jpg"
  },
];

function createTempleCards(templeList) {
    templeGrid.innerHTML = "";

    templeList.forEach((temple) => {
        const card = document.createElement("section");
        const name = document.createElement("h2");
        const location = document.createElement("p");
        const dedication = document.createElement("p");
        const area = document.createElement("p");
        const image = document.createElement("img");

        name.textContent = temple.templeName;
        location.textContent = `Location: ${temple.location}`;
        dedication.textContent = `Dedicated: ${temple.dedicated}`;
        area.textContent = `Size: ${temple.area.toLocaleString()} square feet`;

        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} Temple`;
        image.loading = "lazy";

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(image);

        templeGrid.appendChild(card);
    });
}

function displayTemples(title, templeList) {
    pageHeading.textContent = title;
    createTempleCards(templeList);
    navigation.classList.remove("open");
    menuButton.textContent = "☰";
    menuButton.setAttribute("aria-expanded", "false");
}

document.querySelector("#home").addEventListener("click", (event) => {
    event.preventDefault();
    displayTemples("Home", temples);
});

document.querySelector("#old").addEventListener("click", (event) => {
    event.preventDefault();

    const oldTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated);
        return year < 1900;
    });

    displayTemples("Old Temples", oldTemples);
});

document.querySelector("#new").addEventListener("click", (event) => {
    event.preventDefault();

    const newTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated);
        return year > 2000;
    });

    displayTemples("New Temples", newTemples);
});

document.querySelector("#large").addEventListener("click", (event) => {
    event.preventDefault();

    const largeTemples = temples.filter((temple) => {
        return temple.area > 90000;
    });

    displayTemples("Large Temples", largeTemples);
});

document.querySelector("#small").addEventListener("click", (event) => {
    event.preventDefault();

    const smallTemples = temples.filter((temple) => {
        return temple.area < 10000;
    });

    displayTemples("Small Temples", smallTemples);
});

createTempleCards(temples);