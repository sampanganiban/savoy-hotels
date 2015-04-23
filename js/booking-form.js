// Find the booking form
var form = document.getElementById('booking-form');

// Find the form elements
var firstNameInput     = document.getElementById('first-name');
var firstNameMessage   = document.getElementById('firstname-message');
var lastNameMessage    = document.getElementById('lastname-message');
var lastNameInput      = document.getElementById('last-name');
var ageInput		   = document.getElementById('age');
var termsAndConditions = document.getElementById('terms-and-conditions');
var termsMessage       = document.getElementById('terms-message');
var email			   = document.getElementById('email');
var emailMessage	   = document.getElementById('email-message');  
var phone			   = document.getElementById('phone');
var phoneMessage	   = document.getElementById('phone-message');
var formMessage		   = document.getElementById('form-message'); 

// Find elements for Checkin/out dates
var checkinDay 		= document.getElementById('checkin-day');
var checkinMonth	= document.getElementById('checkin-month'); 
var checkinYear		= document.getElementById('checkin-year');
var checkoutDay 	= document.getElementById('checkout-day');
var checkoutMonth	= document.getElementById('checkout-month'); 
var checkoutYear	= document.getElementById('checkout-year');
var checkinMessage  = document.getElementById('checkin-message');
var checkoutMessage = document.getElementById('checkout-message');


// Find radio buttons
var roomRadios  = document.getElementsByName('room');
var roomMessage = document.getElementById('room-message');

// Find the guest elements
var adults		= document.getElementById('adults');
var children	= document.getElementById('children');
var guestMessage= document.getElementById('guest-message');

// onblur function for customers first name and last name
firstNameInput.onblur = function() {
	if(firstNameInput.value.length == 0 ){
		firstNameMessage.innerHTML = 'You must add your first name.';
		formIsValid = false;
	} else if (validateName(firstNameInput.value) == false ){
		firstNameMessage.innerHTML = 'Please enter the correct first name.';
		formIsValid = false;
	} else {
		firstNameMessage.innerHTML = '';
	}
}

lastNameInput.onblur = function() {
	if(lastNameInput.value.length == 0 ){
		lastNameMessage.innerHTML = 'You must add your last name.';
		formIsValid = false;
	} else if (validateName(lastNameInput.value) == false ){
		lastNameMessage.innerHTML = 'Please enter the correct last name.';
		formIsValid = false;
	} else {
		lastNameMessage.innerHTML = '';
	}
}

email.onblur = function() {
	if (email.value.length == 0){
		emailMessage.innerHTML = 'You must enter your email';
		formIsValid = false;
	} else if (validateEmail(email.value) == false){
		emailMessage.innerHTML = 'Invalid email. Example: test@example.com';
		formIsValid = false;
	} else{
		emailMessage.innerHTML = '';
	}
}

phone.onblur = function() {
	if (phone.value.length == 0){
		phoneMessage.innerHTML = 'You must enter your contact number';
		formIsValid = false;
	} else if (validatePhone(phone.value) == false){
		phoneMessage.innerHTML = "Invalid phone number. Example: +64 123 456";
		formIsValid = false;
	} else{
		phoneMessage.innerHTML = '';
	}
}


form.onsubmit = function() {

	var formIsValid = true;
	
	if(phone.value.length == 0 || email.value.length == 0 || lastNameInput.value.length == 0 || firstNameInput.value.length == 0 ){
		formMessage.innerHTML = 'You must provide information in all fields';
		formIsValid = false;
	} else{
		formMessage.innerHTML = '';
	}

	if(checkinYear.value == checkoutYear.value) {
		if(checkinMonth.value == checkoutMonth.value) {
			if(checkinDay.value <= checkoutDay.value) {
				checkoutMessage.innerHTML 	= '';
				checkinMessage.innerHTML 	= '';
			} else {
				checkoutMessage.innerHTML = 'Cannot select a check-out day before check-in day';
				formIsValid = false;
			}
		} else if(checkinMonth.value > checkoutMonth.value) {
			checkoutMessage.innerHTML = 'Cannot be before check in month';
			formIsValid = false;
		} else {
			checkoutMessage.innerHTML 	= '';
			checkinMessage.innerHTML 	= '';
		}
	} else if(checkinYear.value > checkoutYear.value) {
		checkoutMessage.innerHTML = 'Cannot be before check in year';
		formIsValid = false;
	} else {
		checkoutMessage.innerHTML 	= '';
		checkinMessage.innerHTML 	= '';
	}

	if(termsAndConditions.checked == false){
		termsMessage.innerHTML = 'Check this box to agree to the terms and conditions';
		formIsValid = false;
	} else {
		termsMessage.innerHTML = '';
	}

	var result = validateRadioButtons(roomRadios);
	
	if(result) {
		roomMessage.innerHTML = '';
	} else {
		roomMessage.innerHTML = 'Please choose a room';
		formIsValid = false;
	}

	if(adults.value.length == 0){
		guestMessage.innerHTML = 'You must select at least one adult';
	} else{
		guestMessage.innerHTML = '';
	}

	return formIsValid;
}

	











