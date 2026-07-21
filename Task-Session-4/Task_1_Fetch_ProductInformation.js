const products = {
    1: "Laptop",
    2: "Phone",
    3: "Tablet"
};

function getProduct(id) {
    return new Promise((resolve, reject) => {
        if (products[id]) {
            resolve(products[id]);
        } else {
            reject("Error: Product not found.");
        }
    });
}

getProduct(2)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });