function calculateShipping(weight) {
    return new Promise((resolve, reject) => {
        if (weight > 0) {
            resolve(weight * 5);
        } else {
            reject("Invalid weight");
        }
    });
}

calculateShipping(10)
    .then(cost => console.log(`Shipping cost: ${cost}`))
    .catch(error => console.log(error));

