const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

themeToggle.addEventListener("input", () => {
    html.setAttribute(
        "data-theme", 
        html.dataset.theme == "winter" ? "dracula" : "winter"
    );
});