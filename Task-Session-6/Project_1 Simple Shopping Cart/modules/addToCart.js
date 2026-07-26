const products = require("../data/products");
const cart = require("../data/cart");

function addToCart(id) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            cart.push(products[i]);
            console.log(products[i].name + " added to cart.");
            return;
        }
    }

    console.log("Product not found.");
}

module.exports = addToCart;