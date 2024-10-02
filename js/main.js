const productList = document.querySelector(".catalog")

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
    let buyButtons = document.querySelectorAll(".buy-button");
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
                    <a href="#" class="btn btn-primary">Purchase</a>
                </div>
            </div>`;
}
