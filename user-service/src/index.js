const express = require('express');
const path = require('path');
const app = express();
const port = 5006;

app.use(express.json());

// Servir archivos estáticos desde el directorio "public"
app.use(express.static(path.join(__dirname, '../public')));

let habits = [];

app.post('/habits', (req, res) => {
  const habit = req.body;
  habits.push(habit);
  res.status(201).send(habit);
});

app.get('/habits', (req, res) => {
  res.send(habits);
});

app.put('/habits/:id', (req, res) => {
  const id = req.params.id;
  const updatedHabit = req.body;
  habits = habits.map(habit => (habit.id === id ? updatedHabit : habit));
  res.send(updatedHabit);
});

app.delete('/habits/:id', (req, res) => {
  const id = req.params.id;
  habits = habits.filter(habit => habit.id !== id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Habit service listening at http://localhost:${port}`);
});
