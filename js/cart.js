const cart_list = document.querySelector('.container');
const overallPrice = document.querySelector('.overall-price');
const finalprice = document.querySelector('.final-price');
const cartAmount = document.querySelector('.cart-amount');

function get_item(item) {
    return `<div class="master-container">
  <div class="card cart">
<!--    <label class="title">Your cart</label>-->
    <div class="products">
      <div class="product">
        <img src="${item.image}" alt="">
        <div>
          <span>${item.name}</span>
        </div>
        <div class="quantity">
          <button onclick="cart.updateQuantity(item.title, item.quantity - 1)">
            <svg fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="#47484b" d="M20 12L4 12"></path>
            </svg>
          </button>
          <label>${item.quantity}</label>
          <button onclick="cart.updateQuantity(item.title, item.quantity + 1)">
            <svg fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="#47484b" d="M12 4V20M20 12H4"></path>
            </svg>
          </button>
        </div>
        <label class="price small">${item.price}$</label>
      </div>
    </div>
  </div>`
}



function showCartList() {
    cart_list.innerHTML = ''
    for (let key in cart.items) { // проходимося по всіх ключах об'єкта cart.items
        cart_list.innerHTML += get_item(cart.items[key])
    }
    finalprice.innerHTML = cart.calculateTotal()


}

showCartList()

function checkout() {
    const checkoutBtn = document.querySelector('.checkout-btn');
    const overlay = document.querySelector('.overlay');
    const modal12  = document.querySelector('.modal12');
}