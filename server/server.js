const express = require('express');
const path = require('path');

const app = express();
const port = 4000;

app.use(express.static(path.join(__dirname, '../client')))
app.listen(port, () => {
  console.log('Running on port:', port);
});
