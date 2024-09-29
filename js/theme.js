const themeSwitcher = document.querySelector("#theme-switcher");


themeSwitcher.addEventListener("change", (qualifiedName, value) => {
    let currentTheme = themeSwitcher.getAttribute("data-bs-theme")
    if (currentTheme === "dark") {
        themeSwitcher.setAttribute("data-bs-theme", "light");
    } else {
        themeSwitcher.setAttribute("data-bs-theme", "dark");
    }
    console.log(currentTheme)
})