const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json([
    { name: "Bob", email: "bob@bob.com" },
    { name: "Alice", email: "alice@alice.com" },
    { name: "Jake", email: "jake@jake.com" },
    { name: "Maria", email: "maria@maria.com" },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
