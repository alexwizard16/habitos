document.getElementById('habit-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const habit = document.getElementById('habit').value;
  const response = await fetch('/habits', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ habit })
  });
  if (response.ok) {
    loadHabits();
  }
});

async function loadHabits() {
  const response = await fetch('/habits');
  const habits = await response.json();
  const habitList = document.getElementById('habit-list');
  habitList.innerHTML = '';
  habits.forEach(habit => {
    const li = document.createElement('li');
    li.textContent = habit.habit;
    habitList.appendChild(li);
  });
}

loadHabits();
