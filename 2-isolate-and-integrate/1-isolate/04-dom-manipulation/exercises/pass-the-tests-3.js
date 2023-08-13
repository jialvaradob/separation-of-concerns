'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <table>
    <tbody>
      <tr></tr>
      <tr></tr>
    </tbody>
  </table>
`;
console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---
//  you want to create a 2x2 table with a, b, c, d in the squares
const columns = document.createElement('td');
let a = 0;
const arrayReference = ['a', 'b', 'c', 'd'];
for (const col of divEl.getElementsByTagName('tr')){
  col.appendChild(columns);
  divEl.firstChild.children[0].children[a].children[0].innerHTML = arrayReference[a];

  a += 1;
}
// Aqui quiero poner un loop que anada las columnas y despues les de un valor. con el parametro de a se puede hacer en un solo loop
// --- --- --- --- --- ---

console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));

const expectedInnerHTMLs = ['a', 'b', 'c', 'd'];
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    const tbodyEL = divEl.children[0].children[0];
    const trEl = tbodyEL.children[i];
    const tdEl = trEl.children[j];
    const actual = tdEl.innerHTML;
    const expected = expectedInnerHTMLs.shift();
    console.assert(actual === expected, `expected "${expected}"`);
  }
}
