const express = require('express');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World. From change log');
});

app.listen(port, () => {
  console.log(`server running on ports ${port}`);
});
