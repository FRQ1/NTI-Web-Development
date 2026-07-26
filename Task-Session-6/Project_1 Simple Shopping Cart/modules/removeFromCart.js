const cart = require("../data/cart");

function removeFromCart(id) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            console.log(cart[i].name + " removed from cart.");
            cart.splice(i, 1);
            return;
        }
    }

    console.log("Product not found in cart.");
}

module.exports = removeFromCart;