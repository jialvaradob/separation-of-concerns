'use strict';

// fill in the _s

const buttonEl = document.createElement('button');
buttonEl.innerHTML = 'are you honest?';
console.log(buttonEl.nodeName, buttonEl.cloneNode(true));

const truthTestHandler = () => {
  // ask a user to confirm if they are honest
  // let them know what you think of their answer
  const response = prompt('Are you an honest person?');
  if (response === null) {
    return;
  }
  else if (response === ''){
    alert ('This is a yes or no question. :L');
  }
  else if (response === 'yes'){
    alert ('If you say so')
  }
  else if (response === 'no'){
    alert ('That\'s the first step')
  }
  else {
    alert ('Try again')
  }
  
};

buttonEl.addEventListener('click', truthTestHandler);

// "click" the button once
const clickEvent1 = new Event('click');
buttonEl.dispatchEvent(clickEvent1);

// "click" the button again
const clickEvent2 = new Event('click');
buttonEl.dispatchEvent(clickEvent2);
