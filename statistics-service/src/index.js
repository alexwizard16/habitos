const express = require('express');
const path = require('path');
const app = express();
const port = 5009;

app.use(express.json());

// Servir archivos estáticos desde el directorio "public"
app.use(express.static(path.join(__dirname, '../public')));

let statistics = [];

app.post('/statistics', (req, res) => {
  const stat = req.body;
  statistics.push(stat);
  res.status(201).send(stat);
});

app.get('/statistics', (req, res) => {
  res.send(statistics);
});

app.listen(port, () => {
  console.log(`Statistics service listening at http://localhost:${port}`);
});
