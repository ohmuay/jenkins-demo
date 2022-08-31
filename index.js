const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "hi ha" });
});

app.listen(3000, () => {
  console.log("app is up and running on port 3000");
});
