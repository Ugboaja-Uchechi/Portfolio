const icon = document.querySelector('.icon');
const closeIcon = document.querySelector('.x-icon');
const container = document.querySelector('.mobile-header-nav-links');

// Mobile menu
function openBar() {
  container.style.display = 'flex';
}

function close() {
  container.style.display = 'none';
}

// Mobile menu
icon.addEventListener('click', openBar);
closeIcon.addEventListener('click', close);

//  FORM VALIDATION
const formContainer = document.querySelector('.form-tag');
const mailInput = document.getElementById('email');
const messageError = document.querySelector('.error-text');

formContainer.addEventListener('submit', (e) => {
  if (mailInput.value === mailInput.value.toLowerCase()) {
    messageError.textContent = '';
  } else {
    e.preventDefault();
    messageError.innerHTML = '*email must be in lower case <br> * form not sent';
  }
});
