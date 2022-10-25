let table = document.querySelector('#table');
let list = document.querySelector('#list');
const buttons = document.querySelectorAll('button');

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
  let b = document.createElement('button');
  b.textContent = 'Show my Posts';
  b.value = obj.id;
  td.appendChild(b);
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
}

for(let y=0; y<buttons.length; y++) {
  buttons[y].addEventListener('click', currentId);
}
function currentId() {
  console.log(this.value);
}