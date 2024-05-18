const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;
const template = document.getElementById("template");
const countriesList = document.getElementById("countries-list")

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

const updateUI = (countries) => {
    countries.forEach((country) => {
        const {
            flags: {svg}, 
            name:{common},
            population,
            region,
            capital,
        } = country;
        const clone = document.querySelector("template")
        const card = clone.content.cloneNode(true);
        const link = card.querySelector("#card-link");
        const img = card.querySelector("img");
        const name = card.querySelector("h2");
        const populate = card.querySelector("#population");
        const regionel = card.querySelector("#region");
        const capitel = card.querySelector("#capital");

        name.textContent = common;
        populate.textContent = population.toLocaleString("en-US");
        regionel.textContent = region;
        capitel.textContent = capital;
        img.src = svg;
        link.href = `/about.html?name=${common}`;

        countriesList.appendChild(card)
    })
};

fetch("https://restcountries.com/v3.1/all").then((data) => {
    return data.json()
}) .then((countries) => {
    updateUI(countries);
})