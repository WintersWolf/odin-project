const form = document.getElementById('form');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zipcode');
const password = document.getElementById('password');
const conf = document.getElementById('confirm_password');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkValid();
});

function checkValid() {
  let isValid = 0;
	const emailValue = email.value.trim();
  const countryValue = country.value.trim();
  const zipValue = zip.value.trim();
	const passwordValue = password.value.trim();
	const confValue = conf.value.trim();

	
	if(emailValue === '') {
		isError(email, 'Please enter your email.');
	} else if (!isEmail(emailValue)) {
		isError(email, 'Please enter a valid email.');
	} else {
    isValid++;
	}

  if(countryValue === '') {
		isError(country, 'Please enter the country you live in.');
	} else {
    isValid++;
	}

  if(zipValue === '') {
		isError(zip, 'Please enter your zip code.');
	} else {
    isValid++;
	}
	
	if(passwordValue === '') {
		isError(password, 'Please choose a password.');
	} else {
    isValid++;
	}
	
	if(confValue === '') {
		isError(conf, 'Please confirm your password.');
	} else if(passwordValue !== confValue) {
		isError(conf, 'Passwords do not match');
	} else{
    isValid++;
	}

  if(isValid == 5) {
    onSubmit();
  } else {
    isValid = 0;
  }

}

function isError(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control input-container ic1 error';
	small.innerText = message;
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function onSubmit(){
  console.log('Submission successfully validated.')
  alert('Submission successfully validated.');
  email.value = '';
  country.value = '';
  zip.value = '';
  password.value = '';
  conf.value = '';
}

