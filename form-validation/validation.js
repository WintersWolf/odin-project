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
	// trim to remove the whitespaces
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
		noError(email);
	}

  if(countryValue === '') {
		isError(country, 'Please enter the country you live in.');
	} else {
		noError(country);
	}

  if(zipValue === '') {
		isError(zip, 'Please enter your zip code.');
	} else {
		noError(zip);
	}
	
	if(passwordValue === '') {
		isError(password, 'Please choose a password.');
	} else {
		noError(password);
	}
	
	if(confValue === '') {
		isError(conf, 'Please confirm your password.');
	} else if(passwordValue !== confValue) {
		isError(conf, 'Passwords do not match');
	} else{
		noError(conf);
	}
}

function isError(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control input-container ic1 error';
	small.innerText = message;
}

function noError(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control input-container ic1 success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
