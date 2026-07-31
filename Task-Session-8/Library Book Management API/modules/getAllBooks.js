const readBooks = require("./readBooks");

async function getAllBooks(req, res) {
    try {
        const books = await readBooks();

        res.writeHead(200, {"Content-Type": "application/json"});

        res.end(JSON.stringify(books));

    } catch (error) {

        res.writeHead(500, {"Content-Type": "application/json"});

        res.end(JSON.stringify({message: "Internal Server Error"}));
    }
}

module.exports = getAllBooks;