import { users, createTableRow } from './users.js';

const table = document.querySelector('table');


const tr = createTableRow(users);

table.append(tr);