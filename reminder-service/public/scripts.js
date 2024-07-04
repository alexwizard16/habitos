document.getElementById('reminder-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const reminder = document.getElementById('reminder').value;
  const response = await fetch('/reminders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ reminder })
  });
  if (response.ok) {
    loadReminders();
  }
});

async function loadReminders() {
  const response = await fetch('/reminders');
  const reminders = await response.json();
  const reminderList = document.getElementById('reminder-list');
  reminderList.innerHTML = '';
  reminders.forEach(reminder => {
    const li = document.createElement('li');
    li.textContent = reminder.reminder;
    reminderList.appendChild(li);
  });
}

loadReminders();
