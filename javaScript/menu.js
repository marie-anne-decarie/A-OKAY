const hamb = document.querySelector('#open');
const closer = document.querySelector('#close');
const menu = document.querySelector('#myNav');


hamb.addEventListener('click', openNav);
closer.addEventListener('click', closeNav);

function openNav() {
  menu.style.width = "40vw";
}

function closeNav() {
  menu.style.width = "0%";
}