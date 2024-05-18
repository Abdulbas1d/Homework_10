const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;
const template = getElementById("template")

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

fetch("https://restcountries.com/v3.1/all").then((data) => {
    return data.json()
}) .then((countries) => {
    console.log(countries);
})