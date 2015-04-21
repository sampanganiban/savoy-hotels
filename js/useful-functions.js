// Function to validate an email address
function validateEmail( email ) {
	var pattern = /^[a-zA-Z0-9.\-_]{1,64}@[a-zA-Z0-9.\-_]{1,186}$/;
	// Do the validation
	if( pattern.test( email ) == false ) {
		return false;
	} else {
		return true;
	}
}

function checkStringLength( stringToCheck, minLength, maxLength ) {
	if( stringToCheck.length < minLength || stringToCheck.length > maxLength ) {
		return false;
	} else {
		return true;
	}
}

function validateUsername( usernameToCheck ) {
	var usernamePattern = /^[a-zA-Z0-9._-]{3,20}$/;
	// If the pattern is wrong
	if( usernamePattern.test( usernameToCheck ) == false ) {
		// Bad
		return false;
	} else {
		// Good
		return true;
	}
}

// Function to check if a radio button has been checked
function validateRadioButtons( radioButtonsToCheck ) {
	var found = false;
	for( var i=0; i<radioButtonsToCheck.length; i++ ) {
		// Check the radio button that we are looping over
		if( radioButtonsToCheck[i].checked ) {
			// Found one!
			found = true;
		}
	}
	return found;
}













