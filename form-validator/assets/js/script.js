const elForm = document.getElementById('form');
const elUserName = document.getElementById('username');
const elEmail = document.getElementById('email');
const elPassword = document.getElementById('password');
const elPassword2 = document.getElementById('password2');

function showError(input, message) {
  const elFormControl = input.parentElement;
  elFormControl.className = 'form-control error';
  const elSmall = elFormControl.querySelector('small');
  elSmall.innerText = message;
};
function showSuccess(input) {
  const elFormControl = input.parentElement;
  elFormControl.className = 'form-control success';
};

function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

elForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (elUserName.value === '') {
    showError(elUserName, 'Username is required!');
  } else {
    showSuccess(elUserName);
  };
  if (elEmail.value === '') {
    showError(elEmail, 'Email is required!');
  } else if (!isValidEmail(elEmail.value)) {
    showError(elEmail, 'Email is not valid!');
  } else {
    showSuccess(elEmail);
  };
  if (elPassword.value === '') {
    showError(elPassword, 'Password is required!');
  } else {
    showSuccess(elPassword);
  };
  if (elPassword2.value === '') {
    showError(elPassword2, 'Password is required!');
  } else {
    showSuccess(elPassword2);
  };
});