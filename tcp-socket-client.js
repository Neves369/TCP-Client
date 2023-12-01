const net = require("net");

const host = "192.168.0.105";
const port = 5000;

const client = net.createConnection(port, host, () => {
    console.log("Connected");
    client.write(`requisição`);
});

client.on("data", (data) => {
    console.log(`Received: ${data}`);
});

client.on("error", (error) => {
    console.log(`Error: ${error.message}`);
});

client.on("close", () => {
    console.log("Connection closed");
});