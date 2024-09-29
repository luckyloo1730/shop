const catalog = document.querySelector('.catalog');

class Product {
    constructor(name, price, ram, ssd, battery, chip, display, yearOfCreation, image) {
        this.name = name;
        this.price = price;
        this.ram = ram;
        this.ssd = ssd;
        this.battery = battery;
        this.chip = chip;
        this.display = display;
        this.yearOfCreation = yearOfCreation;
        this.image = image;
    }
}

const products = [
    new Product('iPhone 14', 799, '6GB', '128GB', '3,279mAh', 'A15 Bionic', '6.1-inch OLED', 2022, 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue?wid=5120&hei=2880&fmt=webp&qlt=70&.v=bjlYUjk1NXN2Uy9CTWFMaXBneUF0bEthL1VsNXgveGUwQ1JqNzA0ZHAra2lYQ0tYMHd1OS9ZREtnNzFSR1owOHF2TWlpSzUzejRCZGt2SjJUNGl1VEtsS0dZaHBma3VTb3UwU2F6dkc4TGUyZW92SlBoRGNVUmdGRkF6QU0rNmI=&traceId=1'),
    new Product('iPhone 14 Plus', 899, '6GB', '128GB', '4,325mAh', 'A15 Bionic', '6.7-inch OLED', 2022, 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue?wid=5120&hei=2880&fmt=webp&qlt=70&.v=bjlYUjk1NXN2Uy9CTWFMaXBneUF0bEthL1VsNXgveGUwQ1JqNzA0ZHAra2lYQ0tYMHd1OS9ZREtnNzFSR1owOHF2TWlpSzUzejRCZGt2SjJUNGl1VEtsS0dZaHBma3VTb3UwU2F6dkc4TGUyZW92SlBoRGNVUmdGRkF6QU0rNmI=&traceId=1'),
    new Product('iPhone 14 Pro', 999, '6GB', '128GB', '3,200mAh', 'A16 Bionic', '6.1-inch OLED', 2022, 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue?wid=5120&hei=2880&fmt=webp&qlt=70&.v=bjlYUjk1NXN2Uy9CTWFMaXBneUF0bEthL1VsNXgveGUwQ1JqNzA0ZHAra2lYQ0tYMHd1OS9ZREtnNzFSR1owOHF2TWlpSzUzejRCZGt2SjJUNGl1VEtsS0dZaHBma3VTb3UwU2F6dkc4TGUyZW92SlBoRGNVUmdGRkF6QU0rNmI=&traceId=1'),
    new Product('iPhone 14 Pro Max', 1099, '6GB', '128GB', '4,323mAh', 'A16 Bionic', '6.7-inch OLED', 2022, 'https://example.com/iphone14promax.jpg'),
    new Product('MacBook Air M1', 999, '8GB', '256GB', '49.9Wh', 'Apple M1', '13.3-inch Retina', 2020, 'https://example.com/macbookairm1.jpg'),
    new Product('MacBook Air M2', 1199, '8GB', '256GB', '52.6Wh', 'Apple M2', '13.6-inch Retina', 2022, 'https://example.com/macbookairm2.jpg'),
    new Product('MacBook Pro 13-inch', 1299, '8GB', '256GB', '58.2Wh', 'Apple M1', '13.3-inch Retina', 2020, 'https://example.com/macbookpro13.jpg'),
    new Product('MacBook Pro 14-inch', 1999, '16GB', '512GB', '70Wh', 'Apple M1 Pro', '14.2-inch XDR', 2021, 'https://example.com/macbookpro14.jpg'),
    new Product('MacBook Pro 16-inch', 2499, '16GB', '512GB', '100Wh', 'Apple M1 Pro', '16.2-inch XDR', 2021, 'https://example.com/macbookpro16.jpg'),
    new Product('iPad 9th Generation', 329, '3GB', '64GB', '8557mAh', 'A13 Bionic', '10.2-inch Retina', 2021, 'https://example.com/ipad9.jpg'),
    new Product('iPad 10th Generation', 449, '4GB', '64GB', '7606mAh', 'A14 Bionic', '10.9-inch Liquid Retina', 2022, 'https://example.com/ipad10.jpg'),
    new Product('iPad Air', 599, '8GB', '64GB', '7606mAh', 'M1', '10.9-inch Liquid Retina', 2022, 'https://example.com/ipadair.jpg'),
    new Product('iPad Pro 11-inch', 799, '8GB', '128GB', '7538mAh', 'M1', '11-inch Liquid Retina', 2021, 'https://example.com/ipadpro11.jpg'),
    new Product('iPad Pro 12.9-inch', 1099, '8GB', '128GB', '9720mAh', 'M1', '12.9-inch XDR', 2021, 'https://example.com/ipadpro12.jpg'),
    new Product('Apple Watch SE', 279, '1GB', '32GB', '296mAh', 'S5', '1.78-inch OLED', 2020, 'https://example.com/applewatchse.jpg'),
    new Product('Apple Watch Series 8', 399, '1GB', '32GB', '308mAh', 'S8', '1.9-inch OLED', 2022, 'https://example.com/applewatch8.jpg'),
    new Product('Apple Watch Ultra', 799, '1GB', '32GB', '542mAh', 'S8', '1.92-inch OLED', 2022, 'https://example.com/applewatchultra.jpg'),
    new Product('AirPods 2nd Generation', 129, '-', '-', '24 hours (with case)', 'H1', 'In-ear', 2019, 'https://example.com/airpods2.jpg'),
    new Product('AirPods 3rd Generation', 179, '-', '-', '30 hours (with case)', 'H1', 'In-ear', 2021, 'https://example.com/airpods3.jpg'),
    new Product('AirPods Pro 2nd Generation', 249, '-', '-', '30 hours (with case)', 'H2', 'In-ear', 2022, 'https://example.com/airpodspro.jpg'),
    new Product('AirPods Max', 549, '-', '-', '20 hours', 'H1', 'Over-ear', 2020, 'https://example.com/airpodsmax.jpg'),
    new Product('HomePod Mini', 99, '-', '-', '-', 'S5', '3.3-inch round', 2020, 'https://example.com/homepodmini.jpg'),
    new Product('HomePod', 299, '-', '-', '-', 'A8', '6.8-inch round', 2018, 'https://example.com/homepod.jpg'),
    new Product('Apple TV 4K 32GB', 129, '-', '32GB', '-', 'A12 Bionic', '-', 2021, 'https://example.com/appletv32.jpg'),
    new Product('Apple TV 4K 64GB', 149, '-', '64GB', '-', 'A12 Bionic', '-', 2021, 'https://example.com/appletv64.jpg'),
    new Product('Magic Keyboard for iPad Pro 11-inch', 299, '-', '-', '-', '-', 'Keyboard accessory', 2020, 'https://example.com/magickeyboard.jpg'),
    new Product('Magic Mouse', 99, '-', '-', '-', '-', 'Mouse accessory', 2015, 'https://example.com/magicmouse.jpg'),
    new Product('Magic Trackpad', 149, '-', '-', '-', '-', 'Trackpad accessory', 2015, 'https://example.com/magictrackpad.jpg'),
    new Product('Pro Display XDR', 4999, '-', '-', '-', 'A13 Bionic', '32-inch Retina 6K', 2019, 'https://example.com/prodisplay.jpg'),
    new Product('Studio Display', 1599, '-', '-', '-', 'A13 Bionic', '27-inch Retina 5K', 2022, 'https://example.com/studiodisplay.jpg')
];

document.addEventListener('DOMContentLoaded', function () {
    products.forEach(product => {
        const element = document.createElement('div');
        element.innerHTML = `<div class="card" style="width: 18rem;">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">Price: ${product.price}$</p>
                <a href="#" class="btn btn-primary">Purchase</a>
            </div>
        </div>`;
        catalog.appendChild(element);
    });
});
