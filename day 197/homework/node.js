const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    if (req.method === "GET" && req.url === "/users") {
        res.end(`
            <h1>Users</h1>
            <ul>
                <li>Gio</li>
                <li>Nika</li>
            </ul>
        `);
    }

    else if (req.method === "POST" && req.url === "/products") {
        res.end("<h1>New product added</h1>");
    }

    else if (req.method === "PUT" && req.url === "/users") {
        res.end("<h1>User updated</h1>");
    }

    else if (req.method === "DELETE" && req.url === "/posts") {
        res.end("<h1>Post deleted</h1>");
    }

    else {
        res.statusCode = 404;
        res.end("<h1>404 - Route not found</h1>");
    }
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});