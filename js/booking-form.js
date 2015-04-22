// Find the booking form
var form = document.getElementById ('booking-form');

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
var genderRadios  = document.getElementById('gender');
var genderMessage = document.getElementById('gender-message');

// onblur function for customers first name and last name
firstNameInput.onblur = function() {
	if(firstNameInput.value.length == 0 ){
		firstNameMessage.innerHTML = 'You must add your first name.';
	} else if (validateName(firstNameInput.value) == false ){
		firstNameMessage.innerHTML = 'Please enter the correct first name.'
	} else {
		firstNameMessage.innerHTML = '';
	}
}

lastNameInput.onblur = function() {
	if(lastNameInput.value.length == 0 ){
		lastNameMessage.innerHTML = 'You must add your last name.';
	} else if (validateName(lastNameInput.value) == false ){
		lastNameMessage.innerHTML = 'Please enter the correct last name.'
	} else {
		lastNameMessage.innerHTML = '';
	}
}

email.onblur = function() {
	if (email.value.length == 0){
		emailMessage.innerHTML = 'You must enter your email';
	} else if (validateEmail(email.value) == false){
		emailMessage.innerHTML = 'Invalid email. Example: test@example.com';
	} else{
		emailMessage.innerHTML = '';
	}
}

phone.onblur = function() {
	if (phone.value.length == 0){
		phoneMessage.innerHTML = 'You must enter your contact number'
	} else if (validatePhone(phone.value) == false){
		phoneMessage.innerHTML = "Invalid phone number. Example: +64 123 456";
	} else{
		phoneMessage.innerHTML = '';
	}
}

form.onsubmit = function(){

	var formIsValid = true;

	if( checkinYear.value == checkoutYear.value ) {
		if( checkinMonth.value == checkoutMonth.value ) {
			if( checkinDay.value <= checkoutDay.value ) {
				checkoutMessage.innerHTML 	= '';
				checkinMessage.innerHTML 	= '';
			} else {
				checkoutMessage.innerHTML = 'Cannot be before check in day';
				formIsValid = false;
			}
		} else if( checkinMonth.value > checkoutMonth.value ) {
			checkoutMessage.innerHTML = 'Cannot be before check in month';
			formIsValid = false;
		} else {
			checkoutMessage.innerHTML 	= '';
			checkinMessage.innerHTML 	= '';
		}
	} else if( checkinYear.value > checkoutYear.value ) {
		checkoutMessage.innerHTML = 'Cannot be before check in year';
		formIsValid = false;
	} else {
		checkoutMessage.innerHTML 	= '';
		checkinMessage.innerHTML 	= '';
	}

	return formIsValid;
}










