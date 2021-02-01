// DOM element
const navBar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const bodyPadding = document.getElementById('body-pd');
const navLink = document.querySelectorAll('.nav-link');
const collapseLink = document.querySelectorAll('.collapse-link');

// Event listener
navToggle.addEventListener('click', showMenu);
navLink.forEach(link => link.addEventListener('click', colorLink));
collapseLink.forEach(cL => cL.addEventListener('click', showCollapse));

// Show Menu
function showMenu() {
  navBar.classList.toggle('expander-menu');
  bodyPadding.classList.toggle('body-pd');
}

// Set active link
function colorLink() {
  navLink.forEach(link => link.classList.remove('active'));
  this.classList.add('active');
}

// Collapse Menu
function showCollapse() {
  const collapseMenu = this.nextElementSibling;
  collapseMenu.classList.toggle('showCollapse');
  // this.classList.remove('showCollapse');

  // Set rotate
  const rotate = collapseMenu.previousElementSibling;
  rotate.classList.toggle('rotate');
}