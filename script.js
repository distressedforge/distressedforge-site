const signupForm = document.querySelector('.signup-form');
const emailInput = document.querySelector('#email-address');
const formMessage = document.querySelector('#form-message');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.classList.remove('is-error', 'is-info');

  if (!emailInput.value.trim() || !emailInput.validity.valid) {
    formMessage.textContent = 'Enter a valid email address to continue.';
    formMessage.classList.add('is-error');
    emailInput.focus();
    return;
  }

  formMessage.textContent = 'This signup form is not connected yet. Check back soon.';
  formMessage.classList.add('is-info');
});
