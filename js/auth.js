class User {
    constructor(name, password) {
        this.name = name;
    }
}

const loginPage = document.querySelector("#login");
const cookies = document.cookie;
const btnAuth = document.querySelector(".btn-auth")
const cardAuth = document.querySelector(".card-auth");
const cardAuthContainer = document.querySelector(".card-auth-container");

const shop = document.querySelector(".shop");

btnAuth.onclick = () => {
    cardAuth.style.display = 'none'
    cardAuthContainer.style.display = 'none'
    shop.style.display = 'block';
}

for (let i = 0; i < cookies.length; i += 1) {
    let cookie = cookies[i];
    let name = cookie.name[0]
    if (name.match(loginPage)) {
        loginPage.style.display = "none";
    }
}

function showMainPage() {
    window.location.reload()
}

function showAuthPage() {
    loginPage.style.display = 'block';
}

const user = new User()

setCookie("cart", `${user.name}`, {"max-age": 500})
