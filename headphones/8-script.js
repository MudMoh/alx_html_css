// 8-script.js: Hamburger menu toggle for mobile

document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      nav.classList.toggle('open'); // Use .open for nav
      burger.classList.toggle('burger--open');
    });
  }
});
