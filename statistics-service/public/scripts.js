document.getElementById('stat-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const stat = document.getElementById('stat').value;
  const response = await fetch('/statistics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ stat })
  });
  if (response.ok) {
    loadStatistics();
  }
});

async function loadStatistics() {
  const response = await fetch('/statistics');
  const stats = await response.json();
  const statList = document.getElementById('stat-list');
  statList.innerHTML = '';
  stats.forEach(stat => {
    const li = document.createElement('li');
    li.textContent = stat.stat;
    statList.appendChild(li);
  });
}

loadStatistics();
