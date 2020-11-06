const http = require('http');
const port = 8080;
const moment = require('moment');

http.createServer((req, res) => {
    const { method, url } = req;

    // console.log(`method: ${method}`);
    // console.log(`url: ${url}`);

    switch(method) {
        case "GET": {
            console.log("GET");

            if (url === "/songs") {
                console.log("songs");
            }

            break;
        }
    }

    res.write("I'm the response");
    res.end();
}).listen(port); // listen have to be at the end of createServer (unlike Express)

console.log(`Listening on port ${port}`);
