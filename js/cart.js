const cart_list = document.querySelector('.container');
const overallPrice = document.querySelector('.overall-price');

function get_item(item) {
    return `<div class = "cart-item">
        <h4 class="cart-item-title">${item.name}</h4>
        <img class="h-64 w-64 rounded hover:transform hover:scale-105 hover:transition hover:duration-300 transition duration-300" src="${item.image}" alt="">
        
        <div class="cart-item-quantity mt-5">Кількість: 
        <input data-item="${item.name}" class="form-control quantity-input" type="number" name="quantity" min="1" value="${item.quantity}">
        </div>
        <div class="cart-item-price mt-5 font-bold font-mono" data-price="${item.price}">Ціна: ${item.price * item.quantity} $</div>
        </div>`
}

function showCartList() {
    cart_list.innerHTML = ''
    for (let key in cart.items) { // проходимося по всіх ключах об'єкта cart.items
        cart_list.innerHTML += get_item(cart.items[key])
    }
    overallPrice.innerHTML = cart.calculateTotal()


}

showCartList()
