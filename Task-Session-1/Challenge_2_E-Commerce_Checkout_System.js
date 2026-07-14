let customerName;
let productCategory;
let productPrice;
let quantity;
let couponCode;
let paymentMethod;

let subtotal;
let categoryDiscount = 0;
let couponDiscount = 0;
let paymentDiscount = 0;
let totalAfterDiscounts;
let vat;
let finalPrice;

// User Input
customerName = prompt("Enter customer name:");
productCategory = prompt("Enter product category (Electronics, Clothing, Books):");
productPrice = Number(prompt("Enter product price:"));
quantity = Number(prompt("Enter quantity:"));
couponCode = prompt("Enter coupon code (Type NONE if there's no Coupon):");
paymentMethod = prompt("Enter payment method (Cash, Visa, Wallet):");

// Calculate subtotal
subtotal = productPrice * quantity;

// Category Discount
switch (productCategory) {

    case "Electronics":
        categoryDiscount = subtotal * 0.10;
        break;

    case "Clothing":
        categoryDiscount = subtotal * 0.15;
        break;

    case "Books":
        categoryDiscount = subtotal * 0.05;
        break;

    default:
        categoryDiscount = 0;

}

totalAfterDiscounts = subtotal - categoryDiscount;


if (couponCode === "SAVE10") {

    couponDiscount = totalAfterDiscounts * 0.10;

} else if (couponCode === "SAVE20") {

    couponDiscount = totalAfterDiscounts * 0.20;

} else {

    couponDiscount = 0;

}

totalAfterDiscounts = totalAfterDiscounts - couponDiscount;

// Payment Method Discount
switch (paymentMethod) {

    case "Visa":
        paymentDiscount = totalAfterDiscounts * 0.05;
        break;

    case "Wallet":
        paymentDiscount = totalAfterDiscounts * 0.08;
        break;

    case "Cash":
        paymentDiscount = totalAfterDiscounts * 0.02;
        break;

    default:
        paymentDiscount = 0;

}

totalAfterDiscounts = totalAfterDiscounts - paymentDiscount;


if (totalAfterDiscounts < 0) {

    totalAfterDiscounts = 0;

}

// VAT (14%)
vat = totalAfterDiscounts * 0.14;

// Final Price
finalPrice = totalAfterDiscounts + vat;

// Invoice
console.log("========== INVOICE ==========");
console.log("Customer Name: " + customerName);
console.log("Category: " + productCategory);
console.log("Product Price: " + productPrice);
console.log("Quantity: " + quantity);
console.log("Subtotal: " + subtotal);
console.log("Category Discount: " + categoryDiscount);
console.log("Coupon Discount: " + couponDiscount);
console.log("Payment Discount: " + paymentDiscount);
console.log("Total after Discounts: " + totalAfterDiscounts);
console.log("VAT: " + vat);
console.log("Final Price: " + finalPrice);
console.log("=============================");