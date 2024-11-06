const productList = document.querySelector(".catalog")
const cardBtnRedict = document.querySelector(".cart-btn")

cardBtnRedict.addEventListener("click", () => {
    window.location.href = "cart.html"
})

async function getProducts() {
    const response = await fetch("../products.json")
    return await response.json()
}

getProducts().then(function (products) {
    let productList = document.querySelector(".catalog")
    if (productList) {
        products.forEach(product => {
            console.log(product)
            productList.innerHTML += getProductCard(product)
        })
    }
    let buyButtons = document.querySelectorAll(".btn");
    if (buyButtons) {
        buyButtons.forEach(function (button) {
            button.addEventListener("click", addToCart)
        })
    }
})

function getProductCard(product) {
    return `<div class="card" style="width: 18rem;">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Price: ${product.price}$</p>
                    <button data-product='${JSON.stringify(product)}' class="btn purchase btn-primary">Purchase</button>
                </div>
            </div>`;
}


function addTo
(event) {
    const productData = event.target.getAttribute("data-product");

    const product = JSON.parse(productData);
    cart.addItem(product)
    console.log("This works")
}

class ShoppingCart {
    constructor() {
        this.items = {};
        this.cartCounter = document.querySelector('.cart-counter');// отримуємо лічильник кількості товарів у кошику
        this.cartElement = document.querySelector('#cart-items');
        this.loadCartFromCookies(); // завантажуємо з кукі-файлів раніше додані в кошик товари
    }

    // Додавання товару до кошика
    addItem(item) {
        if (this.items[item.name]) {
            this.items[item.name].quantity += 1; // Якщо товар вже є, збільшуємо його кількість на одиницю
        } else {
            this.items[item.name] = item; // Якщо товару немає в кошику, додаємо його
            this.items[item.name].quantity = 1;
        }
        this.updateCounter(); // Оновлюємо лічильник товарів
        this.saveCartToCookies();
    }

    // Зміна кількості товарів
    updateQuantity(itemTitle, newQuantity) {
        console.log("Quality updated")
        if (this.items[itemTitle]) {
            this.items[itemTitle].quantity = newQuantity;
            if (this.items[itemTitle].quantity === 0) {
                delete this.items[itemTitle];
            }
            this.updateCounter();
            this.saveCartToCookies();
        }
    }

    // Оновлення лічильника товарів
    updateCounter() {
        let count = 0;
        for (let key in this.items) { // проходимося по всіх ключах об'єкта this.items
            count += this.items[key].quantity; // рахуємо кількість усіх товарів
        }
        this.cartCounter.innerHTML = count; // оновлюємо лічильник на сторінці
    }

    // Зберігання кошика в кукі
    saveCartToCookies() {
        let cartJSON = JSON.stringify(this.items);
        document.cookie = `cart=${cartJSON}; max-age=${60 * 60 * 24 * 7}; path=/`;
    }

    // Завантаження кошика з кукі
    loadCartFromCookies() {
        let cartCookie = getCookieValue('cart');
        if (cartCookie && cartCookie !== '') {
            this.items = JSON.parse(cartCookie);
            this.updateCounter();
        }
    }
    // Обчислення загальної вартості товарів у кошику
    calculateTotal() {
        let total = 0;
        for (let key in this.items) { // проходимося по всіх ключах об'єкта this.items
            total += this.items[key].price * this.items[key].quantity; // рахуємо вартість усіх товарів
        }
        return total;
    }
}

// Створення об'єкта кошика
let cart = new ShoppingCart();


// Функція для додавання товару до кошика при кліку на кнопку "Купити"
function addToCart(event) {
    // Отримуємо дані про товар з data-атрибута кнопки
    const productData = event.target.getAttribute('data-product');
    const product = JSON.parse(productData);

    // Додаємо товар до кошика
    cart.addItem(product);
    console.log(cart);
}


// Функція для отримання значення кукі за ім'ям
    function getCookieValue(cookieName) {
// Розділяємо всі куки на окремі частини
        const cookies = document.cookie.split(';')
// Шукаємо куки з вказаним ім'ям
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim() // Видаляємо зайві пробіли
// Перевіряємо, чи починається поточне кукі з шуканого імені
            if (cookie.startsWith(cookieName + '=')) {
// Якщо так, повертаємо значення кукі
                return cookie.substring(cookieName.length + 1) // +1 для пропуску "="
            }
        }
// Якщо кукі з вказаним іменем не знайдено, повертаємо порожній рядок
        return ''
    }

function searchProduct(event) {
    event.preventDefault();
    const query = document.querySelector(".query").value.toLowerCase()
    const catalog = document.querySelector(".catalog")
    catalog.innerHTML = "";
    getProducts().then(function (products) {
        let productList = document.querySelector(".catalog")
        if (productList) {
            products.forEach(product => {
                if (product.name.toLowerCase().includes(query)) {
                productList.innerHTML += getProductCard(product)
                }
            })
        }
        let buyButtons = document.querySelectorAll(".btn");
        if (buyButtons) {
            buyButtons.forEach(function (button) {
                button.addEventListener("click", addToCart)
            })
        }
    })
}

const form = document.querySelector("#form");

form.addEventListener('submit', searchProduct);