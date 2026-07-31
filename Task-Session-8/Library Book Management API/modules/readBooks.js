const { readFile } = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "../books.json");

async function readBooks() {
    try {
        const data = await readFile(filePath, "utf8");
        return JSON.parse(data);
        
    } catch (error) {
        console.log(`Error reading books: ${error.message}`);
    }
}

module.exports = readBooks;