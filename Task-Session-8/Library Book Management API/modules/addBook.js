const readBooks = require("./readBooks");
const saveBooks = require("./saveBooks");

async function addBook(req, res) {
    let body = "";

    req.on("data", (chunk) => {
        body += chunk;
    });

    req.on("end", async () => {
        try {
            const newBook = JSON.parse(body);

            const books = await readBooks();

            let id = 1;

            if (books.length > 0) {
                id = books[books.length - 1].id + 1;
            }

            newBook.id = id;

            books.push(newBook);

            await saveBooks(books);

            res.writeHead(201, {"Content-Type": "application/json"});

            res.end(JSON.stringify(newBook));

        } catch (error) {

            res.writeHead(400, {"Content-Type": "application/json"});

            res.end(JSON.stringify({message: "Invalid JSON"}));

            console.log(`Error adding book: ${error.message}`);
        }
    });
}

module.exports = addBook;