async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json();
}

export function createTableRow(users) {
  const tr = document.createElement('tr');

  const tdName = document.createElement('td');
  tdName.textContent = user.username;

  tr.append(tdName);
  return tr;
}

export const users = getUsers();