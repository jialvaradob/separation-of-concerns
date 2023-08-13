'use strict';

const headerEl = document.createElement('h1');
headerEl.innerHTML = 'Just Some Title'
const buttonEl = document.createElement('button');
buttonEl.innerHTML = 'Change title'
console.log('initial header:', headerEl.cloneNode(true));
document.getElementById('test').append(headerEl);

 

const changeHeaderTextHandler = (event) => {
let input = prompt('Write Sumth');
  headerEl.innerHTML = input;
};

headerEl.addEventListener('click', changeHeaderTextHandler);

// "click" the button once
const clickEvent1 = new Event('click');
headerEl.dispatchEvent(clickEvent1);
console.log('after 1st click:', headerEl.cloneNode(true));

// "click" the button again
const clickEvent2 = new Event('click');
headerEl.dispatchEvent(clickEvent2);
console.log('after 2nd click:', headerEl.cloneNode(true));
