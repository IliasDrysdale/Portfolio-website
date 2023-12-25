const button = document.getElementById("toggle");
const body = document.body;
const portfolioIlias = document.getElementById("portfolio");
const contact = document.getElementById("contact");

let isDarkMode = false;

const toggleMode = () => {
    if (isDarkMode) {
        lightMode();
    } else {
        darkMode();
    }
    isDarkMode = !isDarkMode;
}

const darkMode = () => {
    body.style.backgroundColor = "#212121";
    button.innerHTML = "Toggle To Light Mode";
    button.style.color = "#bdbdbd";
    portfolioIlias.style.color = "#bdbdbd";
    contact.style.color = "#bdbdbd";
}

const lightMode = () => {
    body.style.backgroundColor = "#f0f0f0";
    button.innerHTML = "Toggle To Dark Mode";
    button.style.color = "#555555";
    portfolioIlias.style.color = "#555555";
    contact.style.color = "#555555";
}

button.addEventListener("click", toggleMode);