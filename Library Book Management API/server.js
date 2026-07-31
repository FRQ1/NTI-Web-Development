const http = require("http");

const getAllBooks = require("./modules/getAllBooks");
const addBook = require("./modules/addBook");
const deleteBook = require("./modules/deleteBook");

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;

    if (method === "GET" && url === "/books") {

        getAllBooks(req, res);

    } 
    
    else if (method === "POST" && url === "/books") {

        addBook(req, res);

    } 
    
    else if (method === "DELETE" && url.startsWith("/books/")) {

        const id = Number(url.split("/")[2]);

        deleteBook(req, res, id);

    } 
    
    else {

        res.writeHead(404, { "Content-Type": "application/json" });

        res.end(JSON.stringify({ message: "Route not found." }));

    }

});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});