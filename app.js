//Use this for mock API https://jsonplaceholder.typicode.com/
let table = document.querySelector('#table');
let list = document.querySelector('#list');
const button = document.getElementById('button');

function getUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    for(let j = 0; j < json.length; j++) {
     const val = json[j];
     addTableRow(val);
    }
  });
}

function addTableRow(obj) {
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  let t = document.createTextNode(obj.username);
  let box = document.createElement('input');
  box.type = 'checkbox';
  box.id = obj.id;
  box.value = obj.id;
  td.appendChild(box);
  td.appendChild(t);
  tr.appendChild(td);
  table.appendChild(tr);
}

function getPosts(id) {
  //substitute id of clicked username to retrieve posts
  //onClick, grab userId
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  .then(response => response.json())
  .then(json => {
    for(let i = 0; i < json.length; i++) {
      const p = json[i];
      addPost(p);
    }
  });
};

function addPost(val) {
  let li = document.createElement('li');
  let h = document.createElement('title');
  let title = document.createTextNode(val.title)
  let body = document.createTextNode(val.body)
  h.appendChild(title);
  li.appendChild(title);
  li.appendChild(body);
  list.appendChild(li);
}

button.addEventListener('click', () => {
  const userId = document.querySelector('input:checked');
  console.log(userId.value);
  getPosts(userId.value);
});
