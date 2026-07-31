const readBooks = require("./readBooks");
const saveBooks = require("./saveBooks");

async function deleteBook(req, res, id) {
    try {
        const books = await readBooks();

        const index = books.findIndex((book) => book.id === id);

        if (index === -1) {
            res.writeHead(404, { "Content-Type": "application/json" });

            res.end(JSON.stringify({ message: "Book not found." }));
            return;
        }

        books.splice(index, 1);

        await saveBooks(books);

        res.writeHead(200, { "Content-Type": "application/json" });

        res.end(JSON.stringify({ message: "Book deleted successfully." }));

    } catch (error) {

        res.writeHead(500, { "Content-Type": "application/json" });

        res.end(JSON.stringify({ message: "Internal Server Error" }));

        console.log(`Error deleting book: ${error.message}`);
    }
}

module.exports = deleteBook;