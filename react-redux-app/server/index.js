import express from 'express';
import path from 'path';

//initialize app as express
let app = express();

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => console.log("Running on localhost:3000"));
