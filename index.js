const express = require("express");
const mongoose = require("mongoose");
const todosRoute = require("./routes/todos");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

const app = express();
const PORT = 3000;

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/todos", todosRoute);

app.get("/", (req, res) => {
  res.send("hell hell");
});

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connedted to DB!");
  }
);

app.listen(PORT, () => {
  console.log(`app running at http://localhost:${PORT}`);
});
