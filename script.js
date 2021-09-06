const icon = document.querySelector('.icon');
const bar = document.querySelector('.menu-bar');
const closeIcon = document.querySelector('.x-icon');
const container = document.querySelector('.mobile-header-nav-links');
const portfolio = document.querySelector('[portfolio-section]');
const about = document.querySelector('[about-section]');
const contact = document.querySelector('[contact-section]');

function openBar() {
  container.style.display = 'flex';
}

function close() {
  container.style.display = 'none';
}

 icon.addEventListener('click', openBar)
 closeIcon.addEventListener('click', close)
 portfolio.addEventListener('click', close)
 about.addEventListener('click', close)
 contact.addEventListener('click', close)
