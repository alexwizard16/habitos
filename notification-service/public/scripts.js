document.getElementById('notification-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const notification = document.getElementById('notification').value;
  const response = await fetch('/notifications', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ notification })
  });
  if (response.ok) {
    loadNotifications();
  }
});

async function loadNotifications() {
  const response = await fetch('/notifications');
  const notifications = await response.json();
  const notificationList = document.getElementById('notification-list');
  notificationList.innerHTML = '';
  notifications.forEach(notification => {
    const li = document.createElement('li');
    li.textContent = notification.notification;
    notificationList.appendChild(li);
  });
}

loadNotifications();
