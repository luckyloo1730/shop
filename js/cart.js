const overlay = document.querySelector('.overlay');
const modal12 = document.querySelector('.container3');
const body = document.querySelector('body')
const cart_list = document.querySelector('.container');
const overallPrice = document.querySelector('.overall-price');
const finalprice = document.querySelector('.final-price');
const cartAmount = document.querySelector('.cart-amount');

function get_item(item) {
    return `<div class="master-container">
    <div class="card cart">
      <div class="products">
        <div class="product" data-title="${item.name}" data-quantity="${item.quantity}">
          <img src="${item.image}" alt="">
          <div>
            <span>${item.name}</span>
          </div>
          <div class="quantity">
            <button onclick="updateQuantity(this, -1)">
              <svg fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="#47484b" d="M20 12L4 12"></path>
              </svg>
            </button>
            <label>${item.quantity}</label>
            <button onclick="updateQuantity(this, 1)">
              <svg fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="#47484b" d="M12 4V20M20 12H4"></path>
              </svg>
            </button>
          </div>
          <label class="price small">${item.price}$</label>
        </div>
      </div>
    </div>
  </div>`;
}


function updateQuantity(button, change) {
    const productDiv = button.closest('.product');
    const title = productDiv.getAttribute('data-title');
    const currentQuantity = parseInt(productDiv.getAttribute('data-quantity'), 10);
    const newQuantity = currentQuantity + change;

    productDiv.querySelector('.quantity label').textContent = newQuantity;

    productDiv.setAttribute('data-quantity', newQuantity);

    cart.updateQuantity(title, newQuantity);


    showCartList()
}



const checkoutBtn = document.querySelector('.checkout-btn');

function showCartList() {
    console.log(cart.items)
    cart_list.innerHTML = ''
    if (Object.keys(cart.items).length === 0) {
        finalprice.innerHTML = '';
        cart_list.innerHTML = 'Your cart is empty!'
        checkoutBtn.style.display = 'none';
    } else {
        for (let key in cart.items) { // проходимося по всіх ключах об'єкта cart.items
            cart_list.innerHTML += get_item(cart.items[key])
        }
        finalprice.innerHTML = `Price: ${cart.calculateTotal()}`
    }


}

showCartList()



checkoutBtn.addEventListener('click', () => {
    overlay.style.display = 'block';
    modal12.style.display = 'grid';
    body.style.overflow = 'hidden';
    setCookie("cart", "", {"max-age": -1})
})

function setCookie(name, value, options = {}) {

    options = {
        path: '/',
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}
// function checkout() {
//     const modal12 = document.querySelector('.modal12');
//     const body = document.querySelector('body')
// }
//
// checkout()

