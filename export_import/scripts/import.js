import {add} from './export.js';

const a = 2;
const b = 3;

const result = add(a, b);

console.log(result);

document.getElementById('demo').innerHTML = result;