document.getElementById('user-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const response = await fetch('/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name })
  });
  if (response.ok) {
    loadUsers();
  }
});

async function loadUsers() {
  const response = await fetch('/users');
  const users = await response.json();
  const userList = document.getElementById('user-list');
  userList.innerHTML = '';
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user.name;
    userList.appendChild(li);
  });
}

loadUsers();
