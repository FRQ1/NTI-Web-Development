function sendVerificationEmail(email) {
    return new Promise((resolve, reject) => {
        console.log("Sending verification email...");

        setTimeout(() => {
            resolve("Email sent successfully");
        }, 2000);
    });
}

async function registerUser(name, email) {
    try {
        if (!name || !email) {
            throw "Name and email are required";
        }

        const message = await sendVerificationEmail(email);
        console.log(message);

        console.log("User registered successfully");
    } catch (error) {
        console.log(error);
    }
}

registerUser("Farouq", "frq@gmail.com");