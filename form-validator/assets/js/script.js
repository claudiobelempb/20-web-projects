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
// isValidEmail email
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // return re.test(String(email).toLowerCase());
  if(re.test(input.value.trim())){
    showSuccess(input)
  }else{
    showError(input, 'Email is not valid')
  }
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

// check input length
function checkLength(input, min, max){
  if(input.value.length < min){
    showError(input, `${getFieldName(input)} must be at least  ${min} characters`)
  }else if(input.value.length > max){
    showError(input, `${getFieldName(input)} mus be less than ${max} characters`)
  }else{
    showSuccess(input);
  }
}

// check passwords match 
function checkPasswordsMatch(password1, password2){
  if(password1.value !== password2.value){
    showError(password2, 'Password do not match');
  }
}

// Event listeners
elForm.addEventListener('submit', (event) => {
  event.preventDefault();
  checkRequired([elUserName, elEmail, elPassword, elPassword2]);
  checkLength(elUserName, 3, 15);
  checkLength(elPassword, 6, 25);
  checkEmail(elEmail);
  checkPasswordsMatch(elPassword, elPassword2);
});