require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Infinite Cards Server listening at http://localhost:${port}`)
});