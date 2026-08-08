const site = {
    name: "PsychKy Gaming",
    pages: ["index.html", "about.html", "contact.html"]
};


function setupMobileNavigation() {
    const menuButton = document.querySelector("#menu-button");
    const navigation = document.querySelector("#primary-navigation");

    if (!menuButton || !navigation) {
        return;
    }

    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");

        const isOpen = navigation.classList.contains("open");

        menuButton.setAttribute("aria-expanded", `${isOpen}`);

        if (isOpen) {
            menuButton.setAttribute("aria-label", "Close navigation");
        } else {
            menuButton.setAttribute("aria-label", "Open navigation");
        }
    });
}


function setActiveNavigation() {
    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    if (site.pages.includes(currentPage)) {
        const currentLink = document.querySelector(
            `#primary-navigation a[href="${currentPage}"]`
        );

        if (currentLink) {
            currentLink.classList.add("active");
        }
    }
}


function updateFooter() {
    const yearElement = document.querySelector("#current-year");

    if (yearElement) {
        yearElement.textContent = `${new Date().getFullYear()}`;
    }
}


function setupContactForm() {
    const form = document.querySelector("#contact-form");

    if (!form) {
        return;
    }

    form.addEventListener("submit", () => {
        let submissions =
            Number(localStorage.getItem("psychkySubmissions")) || 0;

        submissions++;

        localStorage.setItem(
            "psychkySubmissions",
            `${submissions}`
        );
    });
}


function personalizeThankYouPage() {
    const heading = document.querySelector("#thank-you-heading");
    const message = document.querySelector("#thank-you-message");
    const countElement = document.querySelector("#submission-count");

    if (!heading || !message || !countElement) {
        return;
    }

    const params = new URLSearchParams(window.location.search);

    const name = params.get("name");
    const reason = params.get("reason");

    const submissions =
        Number(localStorage.getItem("psychkySubmissions")) || 0;

    if (name) {
        heading.textContent = `Thanks, ${name}!`;
    }

    if (reason) {
        message.textContent =
            `Your ${reason.toLowerCase()} message was submitted through the PsychKy Gaming contact form.`;
    }

    if (submissions === 1) {
        countElement.textContent =
            "This is the first message submitted from this browser.";
    } else {
        countElement.textContent =
            `${submissions} messages have been submitted from this browser.`;
    }
}


setupMobileNavigation();
setActiveNavigation();
updateFooter();
setupContactForm();
personalizeThankYouPage();