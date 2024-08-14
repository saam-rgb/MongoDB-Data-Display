const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/WebDUserCredentials", {})
  .then(() => console.log(`Database connected`));

PORT = 7000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./server/routes/routes"));

app.listen(PORT, () => console.log(`Port ${PORT} connected`));
