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
// check required fields
function checkRequired(inputArr){
  inputArr.forEach(function(input) {
    if(input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required!`);
    }else{
      showSuccess(input);
    }
  });
}
// get field name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
elForm.addEventListener('submit', (event) => {
  event.preventDefault();
  checkRequired([elUserName, elEmail, elPassword, elPassword2]);
});