const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello there");
});

// create endpoint with get user input
app.get("/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello ${name}`);
});

const port = process.env.PORT || 3000;
module.exports = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);
