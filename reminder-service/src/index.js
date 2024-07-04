const express = require('express');
const path = require('path');
const app = express();
const port = 5008;

app.use(express.json());

// Servir archivos estáticos desde el directorio "public"
app.use(express.static(path.join(__dirname, '../public')));

let reminders = [];

app.post('/reminders', (req, res) => {
  const reminder = req.body;
  reminders.push(reminder);
  res.status(201).send(reminder);
});

app.get('/reminders', (req, res) => {
  res.send(reminders);
});

app.listen(port, () => {
  console.log(`Reminder service listening at http://localhost:${port}`);
});
