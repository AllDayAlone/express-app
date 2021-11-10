const express = require('express');

const app = express();
const port = process.argv[1];

app.use((req, res) => {
  console.log(`${req.method} ${req.url}`);
  res.send(`Hello world. It is ${new Date().toLocaleString()}`);
});

app.listen(port, () => console.log(`🚀 Listening to port ${port}!`));