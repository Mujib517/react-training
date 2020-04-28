const express = require("express"); // common js module
const app = express();

app.use(express.static("build"));
app.use(express.static(__dirname + '/build'));

app.listen(3000, () => console.log("Server is running..."));

app.get("/health", (req, res) => res.status(200).json({ status: "Up" }));


