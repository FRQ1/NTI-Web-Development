let userPin = 1234;
let currentBalance = 5000;
let selectedOperation = 0;
let transactionAmount;
let enteredPin;
let newPin;
let attempts = 0;

// PIN Verification
while (attempts < 3) {

    enteredPin = Number(prompt("Enter your 4-digit PIN:"));

    if (enteredPin === userPin) {
        console.log("PIN verified successfully.");
        break;
    } else {
        attempts++;
        console.log("Incorrect PIN.");

        if (attempts < 3) {
            console.log("Remaining Attempts: " + (3 - attempts));
        }
    }
}

// Account Locked
if (attempts === 3) {

    console.log("Account Locked.");
    console.log("Too many incorrect PIN attempts.");

} else {

    while (selectedOperation != 5) {

        selectedOperation = Number(prompt(
            "========== ATM MENU ==========\n" +
            "1. Withdraw\n" +
            "2. Deposit\n" +
            "3. Check Balance\n" +
            "4. Change PIN\n" +
            "5. Exit\n\n" +
            "Enter your choice:"
        ));

        switch (selectedOperation) {

            case 1:

                transactionAmount = Number(prompt("Enter withdrawal amount:"));

                if (transactionAmount <= 0) {

                    console.log("Withdrawal amount must be greater than zero.");

                } else if (transactionAmount > currentBalance) {

                    console.log("Error: Insufficient balance.");

                } else {

                    currentBalance = currentBalance - transactionAmount;

                    console.log("Withdrawal Successful.");
                    console.log("Remaining Balance: " + currentBalance);

                }

                break;

            case 2:

                transactionAmount = Number(prompt("Enter deposit amount:"));

                if (transactionAmount > 0) {

                    currentBalance = currentBalance + transactionAmount;

                    console.log("Deposit Successful.");
                    console.log("Current Balance: " + currentBalance);

                } else {

                    console.log("Deposit amount must be greater than zero.");

                }

                break;

            case 3:

                console.log("Current Balance: " + currentBalance);

                break;

            case 4:

                newPin = Number(prompt("Enter a new 4-digit PIN:"));

                if (newPin >= 1000 && newPin <= 9999) {

                    userPin = newPin;

                    console.log("PIN changed successfully.");

                } else {

                    console.log("New PIN must contain exactly four digits.");

                }

                break;

            case 5:

                console.log("Thank you for using our ATM.");

                break;

            default:

                console.log("Invalid operation. Please try again.");

        }

    }

}
