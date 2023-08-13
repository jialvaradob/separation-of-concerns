'use strict';

const ulEl = document.createElement('ul');
ulEl.innerHTML = `
  <li> toad </li>
  <p>frog</p>
  <li>salamander</li>
  <li>fish</li>
`;
console.log(ulEl.nodeName + ' (before)', ulEl.cloneNode(true));

const newElem = document.createElement('li');
newElem.innerHTML = 'frog';
//This one should pass but is not.
// ulEl.firstChild.innerHTML = 'toad';

ulEl.children[0].innerHTML = 'toad';
//ulEl.appendBefore(newElem, ulEl.children[])

ulEl.replaceChild(newElem, ulEl.children[1]); 

ulEl.removeChild(ulEl.children[3]);
// --- write some code ---

// --- --- --- --- --- ---

console.log(ulEl.nodeName + ' (after)', ulEl.cloneNode(true));

console.assert(
  ulEl.childElementCount === 3,
  'Test: .childElementCount should be 3',
);

const expectedInnerHTMLs = ['toad', 'frog', 'salamander'];
for (let i = 0; i < expectedInnerHTMLs.length; i++) {
  const actualNodeName = ulEl.children[i].nodeName;
  console.assert(actualNodeName === 'LI', `Test: child ${i} .nodeName`);

  const actualInnerHTML = ulEl.children[i].innerHTML;
  const expectedInnerHTML = expectedInnerHTMLs[i];
  console.assert(
    actualInnerHTML === expectedInnerHTML,
    `Test: child ${i} .innerHTML`,
  );
}
