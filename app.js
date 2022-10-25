import { getUsers, getPosts, convertUsers } from './users.js';




for(const element of document.querySelectorAll("td")) {
  element.addEventListener("click", getId);
}