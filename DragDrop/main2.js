'use strict';

document.addEventListener('dragstart', function(event) {
  event.dataTransfer.setData('Text', event.target.id);
  setTimeout(() => (event.target.style.color = '#5e72b8'), 0);
  setTimeout(() => (event.target.style.background = '#5e72b8'), 0);
});

document.addEventListener('dragover', function(event) {
  event.preventDefault();
});

document.addEventListener('dragend', function(event) {
  event.target.style.background = '';
  event.target.style.color = '';
  event.target.style.margin = '';
});

document.addEventListener('drop', function(event) {
  event.preventDefault();
  if (event.target.className == 'list-header') {
    let data = event.dataTransfer.getData('Text');
    console.log(data);
    event.target.after(document.getElementById(data));
    event.dataTransfer.clearData();
  } else if (event.target.className == 'card') {
    let data = event.dataTransfer.getData('Text');
    console.log(data);
    event.target.after(document.getElementById(data));
    event.dataTransfer.clearData();
  }
});
