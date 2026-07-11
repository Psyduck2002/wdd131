const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    const menuIsOpen = navigation.classList.contains("open");

    menuButton.textContent = menuIsOpen ? "✕" : "☰";
    menuButton.setAttribute("aria-expanded", menuIsOpen);
});