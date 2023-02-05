// simple express server
const path = require("path");
const express = require("express");
const port = process.env.PORT || 5000;
const dotenv = require("dotenv").config();

const app = express();

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // accept body data middle ware

// set static folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/openai", require("./routes/openaiRoutes"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
