const express = require('express');
const path = require('path');
const app = express();
const port = 5010;

app.use(express.json());

// Servir archivos estáticos desde el directorio "public"
app.use(express.static(path.join(__dirname, '../public')));

let notifications = [];

app.post('/notifications', (req, res) => {
  const notification = req.body;
  notifications.push(notification);
  res.status(201).send(notification);
});

app.get('/notifications', (req, res) => {
  res.send(notifications);
});

app.listen(port, () => {
  console.log(`Notification service listening at http://localhost:${port}`);
});
