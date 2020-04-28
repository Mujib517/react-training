const express = require("express"); // common js module
const app = express();

app.use(express.static("build"));
app.use(express.static(__dirname + '/build'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Server is running..."));

app.get("/health", (req, res) => res.status(200).json({ status: "Up" }));


// React app
// React version: 16.19
// Node Version: 14.0
// Linux : 

// 100GB 
// 4 25GB
// Environment
// Linux, Node, Nginx
// containerizing


