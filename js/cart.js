function addToCart() {
    const productData = event.target.getAttribute("data-product");
    const product = JSON.parse(productData);
    cart.addItem(product)
}

class ShoppingCart {
    constructor() {
        this.items = {}
        this.total = 0;
    }
    addItem(item) {
        if (this.items[item.title]) {
            this.items[item.title].quanity += 1;
        } else {
            this.items[item.title] = item;
            this.items[item.title].quantity += 1;
        }
    this.saveCart()
    }
    saveCartToCookies() {
        let cartJSON = JSON.stringify(this.items)
        document.cookie = `cart=${JSON.stringify(cartJSON)}; max-age=${60 * 60 * 24 * 7};
        path=/`
    }
    loadCart () {
        let cartCookie = getCookieValue('cart');
        if (cartCookie && cartCookie !== '') {
            this.items = JSON.parse(cartCookie)
        }
    }
}

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

let cart = new ShoppingCart();

