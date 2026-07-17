function processOrders(orders) {
    let totalRevenue = 0;
    let successfulOrders = 0;
    let processedOrders = 0;
    let skippedInRow = 0;
    let stockFailures = 0;
    let stopMessage = "";

    for (let i = 0; i < orders.length; i++) {
        processedOrders++;

        let order = orders[i];

        if (order.status === "cancelled" || order.status === "invalid" || !order.stockAvailable) {
            skippedInRow++;

            if (!order.stockAvailable) {
                stockFailures++;
            }

            if (skippedInRow === 3 || stockFailures === 3) {
                stopMessage = "System stopped due to critical failure";
                break;
            }

            continue;
        }

        totalRevenue += order.amount;
        successfulOrders++;
        skippedInRow = 0;
    }

    return {
        totalRevenue: totalRevenue,
        successfulOrders: successfulOrders,
        processedOrders: processedOrders,
        stopMessage: stopMessage
    };
}

let orders = [
    { id: 1, status: "valid", stockAvailable: true, amount: 250 },
    { id: 2, status: "cancelled", stockAvailable: true, amount: 100 },
    { id: 3, status: "valid", stockAvailable: true, amount: 500 },
    { id: 4, status: "invalid", stockAvailable: true, amount: 300 },
    { id: 5, status: "valid", stockAvailable: false, amount: 200 },
    { id: 6, status: "cancelled", stockAvailable: true, amount: 400 },
    { id: 7, status: "valid", stockAvailable: true, amount: 600 }
];

let result = processOrders(orders);

console.log("Total Revenue:", result.totalRevenue);
console.log("Successful Orders:", result.successfulOrders);
console.log("Processed Orders:", result.processedOrders);

if (result.stopMessage !== "") {
    console.log(result.stopMessage);
}
