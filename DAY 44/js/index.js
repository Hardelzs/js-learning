const draggable = document.getElementById('draggable');

let posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

draggable.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

function mouseDown(e) {
  e.preventDefault();
  posX = e.clientX - draggable.offsetLeft;
  posY = e.clientY - draggable.offsetTop;
  window.addEventListener('mousemove', moveElement, false);
}

function mouseUp() {
  window.removeEventListener('mousemove', moveElement, false);
}

function moveElement(e) {
  mouseX = e.clientX - posX;
  mouseY = e.clientY - posY;
  draggable.style.left = mouseX + 'px';
  draggable.style.top = mouseY + 'px';
}