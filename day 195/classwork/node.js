let http = require("http");

const server = http.createServer((request, response) => {
    console.log("Received request");

    response.end("ended");
});


server.listen(3000, () => {
    console.log("Server is listening on http://localhost:3000");
});