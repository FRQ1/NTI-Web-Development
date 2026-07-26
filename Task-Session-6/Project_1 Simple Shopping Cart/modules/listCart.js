const cart = require("../data/cart");

function listCart() {

    if (cart.length === 0) {
        console.log("Cart is empty.");
        return;
    }

    for (let i = 0; i < cart.length; i++) {
        console.log(
            cart[i].id +
            " - " +
            cart[i].name +
            " - $" +
            cart[i].price
        );
    }
}

module.exports = listCart;