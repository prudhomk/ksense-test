let table = document.querySelector('#table');

const user = document.querySelector('td');
const post = document.getElementById('post-div');

function getPosts(id) {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  .then(response => response.json())
  .then(json => {
    for(let i = 0; i < json.length; i++) {
      const p = json[i];
      displayPost(p);
    }
  });
};

td.addEventListener('click', (e) => {
  const userId = e.target.value;
  post.textContent = getPosts(userId);
});

function getUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    for(let i = 0; i < json.length; i++) {
     const obj = json[i];
     addTableRow(obj);
    }
  });
}

function addTableRow(obj) {
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  let t = document.createTextNode(obj.username);
  td.appendChild(t);
  tr.appendChild(td);
  table.appendChild(tr);
}
