const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

if (localStorage.getItem("theme")) {
    html.setAttribute("data-theme", localStorage.getItem("theme"));
    themeToggle.checked = html.dataset.theme == 'dracula' ?true : false;
}

themeToggle.addEventListener("input", () => {
    html.setAttribute(
        "data-theme", 
        html.dataset.theme == "winter" ? "dracula" : "winter"
    );
    localStorage.setItem("theme", html.dataset.theme)
});